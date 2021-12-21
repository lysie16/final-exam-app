import "./styles.css";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useHistory} from "react-router-dom";


export const NewPostPage = () => {

    const { register, handleSubmit} = useForm();
    const history = useHistory();

    const submitPost = async(formVals) => {
        const formattedData = {
            fields:{
                user:{
                    stringValue: formVals.user
                },
                text: {
                    stringValue: formVals.text
                },
            }
        }

    console.log(formVals, formattedData);

    try {
        const response = await fetch('https://firestore.googleapis.com/v1/projects/final-exam-21946/databases/(default)/documents/Posts/',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formattedData)
        })
        history.push('/');
    } catch (error) {
        console.log("Error", error);
    }
};

    return (
        <div className="posts-page">
        <form className="form-layout" onSubmit={handleSubmit(submitPost)}>
            <h2>Create a New Post</h2>
            <br />

            <label htmlFor="user">Username</label>
            <input 
            {...register("user")}
            name="user"
            required/>

            <label htmlFor="text">Caption</label>
            <input {...register("text")} name="text" required type="text" />

            <input type="submit" value="Create Post" />
            <br />
          </form>
        )
        </div>
    );
};
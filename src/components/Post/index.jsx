import './styles.css';

export const Post = (props) => {
    const {user, text} = props;

    return (
        <div className="post">
            <h1 className="user-name">{user}</h1>
            <p className="post-text"> {text}</p>
        </div>
    )
}
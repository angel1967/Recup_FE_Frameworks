import { useState } from "react";


// Componente Tarea Aplicación Dinamica //
function Post({ id, createdAt, author, text, comments, image }) {
    const [likes, setLikes] = useState(0);

    /* Calcula la diferencia de fechas en los Post al día de hoy*/
    var today = new Date(); var dd = today.getDate(); var mm = today.getMonth() + 1; var yyyy = today.getFullYear();
    const date1 = new Date(today); const date2 = new Date(createdAt); const diffTime = Math.abs(date2 - date1); const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return <div className="card m-3" style={{ width: "18rem" }}>

        <img src={image} className="Card image top pt-2" alt="..." style={{ width: '250px', height: '250px' }} />
        <p className="card-text">Card id: <strong>{id}</strong></p>
        <button type="button" onClick={() => setLikes(likes + 1)} className="btn btn-outline-danger btn-sm">
            <i className="bi bi-heart">  </i> {likes}
        </button>
        <p className="card-text">Created At: {createdAt} <br></br> {diffDays} days ago </p>
        <div className="card-text-container">
            <p className="card-text pl-3">Title: {author}</p>
        </div>
        <p className="card-text pl-3 pt-2 pb-2 with-border-bottom"> Captions : {text} </p>
        <p className="card-text pl-3 p-2"><i className="bi bi-chat-left"> Comments : (</i>{comments}) </p>

    </div>;
}
export default Post;



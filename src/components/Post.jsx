import { useState } from "react";

// Componente Tarea Aplicación Dinamica //
function Post({ id, createdAt, author, text, comments, image }) {
    const [likes, setLikes] = useState(0);

/* Calcula la diferencia de fechas en los Post al día de hoy*/
    var today = new Date(); var dd = today.getDate(); var mm = today.getMonth()+1; var yyyy = today.getFullYear(); 
    const date1 = new Date(today); const date2 = new Date(createdAt); const diffTime = Math.abs(date2 - date1); const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    return<div className="card m-3" style={{ width: "18rem" }}>
    <img src={image} className="Card image top" alt="..."></img>
          <ul>
          <a className="card-text pl-2 ">{diffDays} days ago </a>
          <button type="button" onClick={()=> setLikes(likes+1)}  className="btn btn-outline-danger btn-sm">
          <i className="bi bi-heart"> </i>   {likes}</button>
          </ul>
          <p className="card-text pl-3">{author} </p>
          <p className="card-text pl-3">{text} </p>
          <p className="card-text pl-3 p-2"><i className="bi bi-chat-left"> Comments (</i>{comments}) </p>
          <p className="card-text pl-3 p-3">Card id{id} </p>   
   
    </div>;
}
export default Post;



  /*    if (user === "@castaned") { 
      return null;
      }   */

// Componente Tarea Aplicación Estatica //
function Post({ id, img, text, user, likes, time }) {

  /*    if (user === "@castaned") { 
      return null;
      }   */

    return<div className="card m-3" style={{ width: "18rem" }}>
    <img src={img} className="Card image top" alt="..." />
    <ul>
          <a className="card-text p-2 ">{time} </a>
          <button type="button" className="btn btn-outline-danger btn-sm"><i className="bi bi-heart"> </i>{likes}</button>
    </ul>
          <p className="card-text pl-3">{user} </p>
          <p className="card-text pl-3">{text} </p>
          <p className="card-text pl-3">{id} </p>
   
    </div>;
}
export default Post;



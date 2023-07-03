import { useState } from "react";
import { useEffect } from "react";
import Post from './Post'; /* Aquí importo el componente Post (Nieto)*/
import { fetchImages } from "../api/harvardApi";  /* Datos y timer */
import '../css/styles.css'; /* Hacer fotos en cuadros 300 Pixs */


//Inicializamos el estado inicial y la promesa de carga de datos
// Creación del servicio temporizador para la carga 

const initialState = [];

// Funcion para presentar los datos (tarjetas)
function PostList({ search }) {

  const [posts, setPosts] = useState(initialState);
  useEffect(() => {
    fetchImages().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return <div className="row p-5">
    {posts === initialState
      ? <h5 className="bi bi-hourglass"> Loading...</h5>
      : posts.filter(e => e.alttext && e.alttext.includes(search))
        .map(post => {

          return <Post
            key={post.idsid}
            id={post.idsid}
            createdAt={post.date}
            author={post.alttext}
            text={post.caption}
            comments={post.description}
            image={post.baseimageurl}
          >
          </Post>

        })
    }
  </div>;
}
export default PostList;



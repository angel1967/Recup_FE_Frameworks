import { useState } from "react";
import { useEffect } from "react";
import Post from './Post'; /* Aquí importo el componente Post (Nieto)*/
import { getPosts } from "../service/data-service";  /* Datos y timer */

//Inicializamos el estado inicial y la promesa de carga de datos
// Creación del servicio temporizador para la carga 
const initialState = [];

// Funcion para presentar los datos (tarjetas)
function PostList({ search }) {

    const [posts, setPosts] = useState(initialState);
    useEffect(() => {
      getPosts().then((posts) => {
        setPosts(posts);
      });
    }, []);

    return<div className= "row p-5"> 
        {posts === initialState
            ? <h5 className="bi bi-hourglass"> Loading...</h5>
            : posts.filter(e => e.text.includes(search)).map(post => {
            return <Post 
            key={post.id}
            id={post.id}
            createdAt={post.createdAt}
            author={post.author}
            text={post.text}
            comments={post.comments}
            image={post.image}
            />
           })
        }
    </div>;
}
export default PostList;
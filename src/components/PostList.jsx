import Post from './Post'; /* Aquí importo el comp Post (Nieto) MAC 1126*/



function PostList() {

    return<div className= "row p-5"> 
        <Post 
        id = "1"
        img= "https://picsum.photos/id/999/200/300"
        text= " UNO Some quick example text to build on the card title"
        user= "@castaned"
        likes= "1.5K"
        time= "3 min ago"
        />
        <Post 
        id = "2"
        img= "https://picsum.photos/id/998/200/300"
        text= "DOS Some quick example text to build on the card title"
        user= "@luis"
        likes= "235"
        time= "15 min ago"
        />
        <Post 
        id = "3"
        img= "https://picsum.photos/id/997/200/300"
        text= "TRES Some quick example text to build on the card title"
        user= "@miguel"
        likes= "155"
        time= "60 min ago"
        />
        <Post 
        id = "4"
        img= "https://picsum.photos/id/996/200/300"
        text= "CUATRO Some quick example text to build on the card title"
        user= "@daniel"
        likes= "10K"
        time= "1 hr ago"
        />
    </div>;
}
export default PostList;
import Post from "./Post";
function Blog(props) {
    const content = props.posts.map((post) => {
        return (
        <Post key = {post.id} post = {post}/>
        );
    });
    return (
        <div>{content}</div>
    )
}



export default Blog;
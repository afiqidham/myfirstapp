function Post(props) {
    const {id, title, body} = props.post;
    return(
        <div>
        <h2>#{id} - {title}</h2>
        <div></div>
        <div>{body}</div>
        </div>
        
    )
}

export default Post;
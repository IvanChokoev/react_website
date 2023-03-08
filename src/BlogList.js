const BlogList = (props) => {
    // we can also use {blogs, title} instead of props
    // and remove the const blogs and const title
    const blogs = props.blogs;
    const title = props.title;

    // props is a way to pass data from parent 
    // components into child components.
    console.log(props, blogs);
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
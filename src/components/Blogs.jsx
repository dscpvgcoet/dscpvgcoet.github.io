import React from "react";
import ReactDOM from "react-dom";
import '../css/blogs.css'

export default class Blogs extends React.Component {
  state = {
    isLoaded: false,
    blogList: [],
    blogTitles: null
  };

  getBlogs = async () => {
    let blogTitles = [];
    let blogList = await fetch("https://chrislema.com/wp-json/wp/v2/posts");
    blogList = await blogList.json();
    this.setState({ isLoaded: true });

    blogList.map((blog) => blogTitles.push(blog.title.rendered));
    this.setState({ blogTitles, blogList });
  };

  componentDidMount() {
    this.getBlogs();
  }

  render() {
    if (!this.state.isLoaded || !this.state.blogTitles) {
      return <div>Loading.. .</div>;
    } else {
      return (
        <div className="blog-list">
          <h2>Our Blogs</h2>
          {this.state.blogList.map((blog, index) => (
            <div className="blog-item">
              <p key={index}><a href={blog.link} className="blog-title" ><u>{blog.title.rendered}</u></a></p>
              <a href={blog.link}><img src={blog.jetpack_featured_media_url} className="blog-image" ></img></a>
              
              {/*<p>{blog.excerpt.rendered}</p>*/}
            </div>
          ))}
        </div>
      );
    }
  }
}


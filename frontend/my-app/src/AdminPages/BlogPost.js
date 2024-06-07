import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard"; // assuming BlogCard.js is in the same directory

function BlogPost() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/blogs'); // Correct port
        setData(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData(); // Call the function on component mount
  }, []);
console.log(data.length);
  return (
    <div>
      {data.map((post, index) => (
        <BlogCard
          key={index}
          title={post.title || "Default Title"}
          tag={post.tag || "Default Tag"}
          description={post.description || "Default Description"}
          imageLink={post.urltoimage1 || "https://images.unsplash.com/photo-1714776422496-9083c23d00cd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          postId={post._id}
        />
      ))}
    </div>
  );
}

export default BlogPost;

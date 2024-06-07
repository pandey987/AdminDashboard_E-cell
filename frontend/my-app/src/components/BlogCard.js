import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogCard = ({ title, tag, description, imageLink, postId }) => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("/blogs");
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleEdit = () => {
    // Navigate to the edit page for the specific blog post
    console.log(postId);
    navigate(`/blog/${postId}/edit`);
  };

  const handleDelete = async () => {
    try {
      // Send delete request to the backend to delete the blog post
      await axios.delete(`/blogs/${postId}/delete`);
      // Optionally, you can navigate to a different page or show a success message
      // For example:
      console.log("Delete post successful");
      // Reload the page after deletion
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate('/login');
      } else {
      console.error("Error deleting post:", error);}
    }
  };

  return (
    <div className="mx-auto h-screen flex items-center justify-center px-8">
      <div className="flex flex-col w-full bg-gray-950 rounded shadow-lg sm:w-3/4 md:w-4/6 lg:w-5/6">
        <div
          className="w-full h-64 bg-top bg-cover rounded-t"
          style={{ backgroundImage: `url(${imageLink})` }}
        ></div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-white">
              {title}
            </h1>
            <p className="leading-normal text-white">{description}</p>
            <div className="flex flex-col items-center mt-4 text-white">
              <div className="w-full p-2">{tag}</div>
              <div className="w-full flex justify-between">
                <button
                  onClick={() => console.log("Read More clicked")}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Read More
                </button>
                {/* Buttons for editing and deleting */}
                <button
                  onClick={handleEdit}
                  className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none focus:ring-yellow-800"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none focus:ring-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

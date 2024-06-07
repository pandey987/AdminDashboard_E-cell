import React from "react";
import { useState } from "react";
import BlogCard from "../components/BlogCard";

function BlogsPage() {
    const [regPopup, setRegpopup] = useState(false);
    const [eventName, setEventName] = useState("");
    const callPopup = (eventName) => {
        setRegpopup(true);
        setEventName(eventName);

        // document.body.style.overflow = 'hidden';
    }
    const closePopup = () => {
        setRegpopup(false);
        document.body.style.overflow = 'visible';
    }
    return (
        <>
            <div>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>

            </div>
        </>
    );
}

export default BlogsPage;
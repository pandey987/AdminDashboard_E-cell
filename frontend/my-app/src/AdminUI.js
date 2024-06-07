import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./AdminPages/Login";
import EventForm from "./AdminPages/EventForm";
import EditEvent from "./AdminPages/EditEvent";
import BlogPost from "./AdminPages/BlogPost";
import AddBlogPostForm from "./AdminPages/AddBlogPostForm";
import Event from "./AdminPages/EventList";
import AppNavbar from "./components/AdminNavbar";
import EditBlogPost from "./AdminPages/EditBlogPost";
import AdminDashboard from "./AdminPages/AdminDashboard";

function AdminUI() {
  return (
    <>
      <AppNavbar />
      <Container>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          <Route path="/event-form" element={<EventForm />} />
          <Route path="/all-event" element={<Event/>} />
          <Route exact path="/event/:id/edit" element={<EditEvent />} />
          <Route path="/blog/:postId/edit" element={<EditBlogPost />} />
          <Route path="/add-blog-post" element={<AddBlogPostForm />} />
          <Route path="/show-blog-post" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default AdminUI;

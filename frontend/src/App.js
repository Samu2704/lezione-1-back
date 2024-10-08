import React, { useEffect } from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { loadAuthors, loadPosts } from "./data/fetch";
import AuthorContextProvider from "./context/AuthorContextProvider"
//import NotFound from "./pages/NotFound";

function App() {
  useEffect(() =>{
loadPosts().then((data)=>console.log(data))
  },[])
  
  return (
    <AuthorContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/new" element={<NewBlogPost />} />
       
        <Route path="/*" element={<Navigate to="/404" />}/>
      </Routes>
      <Footer />
    </Router>
    </AuthorContextProvider>
  );
}

export default App;

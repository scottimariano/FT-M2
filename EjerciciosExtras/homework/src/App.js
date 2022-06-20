import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Users from "./components/Users/Users";
import Buscador from "./components/Buscador/Buscador";
import UserPosts from "./components/UserPosts/UserPosts";
import CommentsPosts from './components/CommentsPost/CommentsPost'

function App() {
  return (
    
    <React.Fragment>
         <NavBar/>

         <Route path="/filter/posts" component={Buscador} />
         <Route exact path="/" component={Users} />
         <Route path={`/users/:id/posts`} component={UserPosts} />
         <Route path={`/user/:userid/post/:id/coments`} component={CommentsPosts} />
      </React.Fragment>
  )
}

export default App

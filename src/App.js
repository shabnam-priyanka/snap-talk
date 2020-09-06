import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Header/Home/Home';
// import Comments from './Component/Header/Comments/Comments';
// import Post from './Component/Header/Post/Post';
import NotMatch from './Component/Header/NotMatch/NotMatch';
import Comments from './Component/Header/Comments/Comments';
import PostDetail from './Component/Header/PostDetail/PostDetail';






function App() {
  return (
    
    <Router>
          <Header></Header>
          
      <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
            <Home></Home>
            
            </Route>
            <Route path="/postDetail/:id">
            <PostDetail></PostDetail>
            
            </Route>
          
            <Route path="*">
              <NotMatch> </NotMatch>
            </Route>
      </Switch>
    </Router>
    
  
    
    
    
  );
}



export default App;


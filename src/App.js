/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBarContainer/SearchBar';


const App = () => {
  const [userInfo, setUserInfo ] = useState(dummyUserData);
  const [state, setState ] = useState(dummyData);
  const [posts, setPosts ] = useState(state);
  const [searchTerms, setSearchTerms ] = useState('');

  const searchPost = () => {
    const newState = state.filter(post => {
      return (post.username.toLowerCase() + 
      post.comments[0].text.toLowerCase()).includes(searchTerms);
    });

    setPosts(newState)
  }

  const addLike = (id, n, userLiked) => {
    const newData = state;
    const likedPostIndex = newData.findIndex((posts) => post.id === id);
    newData[likedPostIndex].likes = n;
    let userData = userInfo;
    if (userLinked === true) {
      userData.likes = userData.filter((likesId) => likesId !== id );
    } else {
      userData.likes.push(id);
    }
    setUserInfo(userData);
    setState(newData);
  }

  const addComment = (id, comment) => {
    let newData = state;
    const commentPostIndex = newdData.findIndex((post) => post.id === id);
    newData[commentPostIndex].comments.push(comment);
    setState(newData);
  }
  
  return (
    <div className="App">
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios"

export default function Diaries() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
  
    useEffect(()=> {
      const fetchPosts = async ()=>{
        const res = await axios.get ("/posts" + search)
        setPosts(res.data)
      }
      fetchPosts()
    },[search])
  return (
    <>
    <Header/>
    <p className="homeTitle">Diaries</p>
    <div className="home">
      
      
        <Posts posts={posts}/>
        <Sidebar/>
       
    </div>
    
    
    </>
  )
}

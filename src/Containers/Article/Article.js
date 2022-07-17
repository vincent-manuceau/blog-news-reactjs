import React from 'react'
import { useLocation } from 'react-router-dom'
import './Article.css'
import { useNavigate } from 'react-router-dom';

export default function Article() {
  const location = useLocation();
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  return (
    <div className='article-content'>
      <h2>{location.state.title}</h2>
      <p>{location.state.description}</p>
      <button className="article-content-btn" onClick={goHome}>Retour aux articles</button>
    </div>
  )
}

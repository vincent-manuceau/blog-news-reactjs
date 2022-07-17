import "./Form.css";
import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

export default function Form() {
  // CONTROLLED INPUTS VERSION (with state)
  /*
     const [article, setArticle] = useState({
       title: "",
       description: "",
     });

   const handleForm = (e) => {
    e.preventDefault();
    dispatch({
        type: 'ADDARTICLE',
        payload: article
    })
    setArticle({
        title:"",
        description:""
    })
  };

  const handleInputs = (e) => {
    if (e.target.classList.contains("inp-title")) {
      const newObjState = {
        ...article,
        title: e.target.value,
      };
      setArticle(newObjState);
    } 
    else if (e.target.classList.contains("inp-body")) {
      const newObjState = {
        ...article,
        description: e.target.value,
      };
      setArticle(newObjState);
    }
  };*/

  // STATELESS UNCONTROLLED INPUTS :
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const newArticle = {
      title: inputsRef.current[0].value,
      description: inputsRef.current[1].value,
    };
    dispatch({
      type: "ADDARTICLE",
      payload: newArticle,
    });
    e.target.reset();
  };

  const inputsRef = useRef([]);
  const addRefs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };
  return (
    <>
      <h1 className="title-form">Ecrivez un article</h1>

      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          ref={addRefs}
          type="text"
          className="inp-title"
          id="title"
          placeholder="Entrez le titre de votre article"
          //   onChange={handleInputs}
          //   value={article.title}
        />

        <label htmlFor="article">Article</label>
        <textarea
          ref={addRefs}
          className="inp-body"
          id="article"
          placeholder="Entrez votre article"
          //   onChange={handleInputs}
          //   value={article.description}
        ></textarea>

        <button>Envoyez l'article</button>
      </form>
    </>
  );
}

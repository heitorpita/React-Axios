import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";


const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
        e.preventDefault();
        const post = {title, body, userID: 1};

        await blogFetch.post("/post", {
          body: post,
        });

        navigate("/")

  };


  return (
    <div className="new-post">
      <h2>Inserir Novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o Titulo"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo</label>
          <textarea name="body" id="body">Digite o Conteudo</textarea>
        </div>
        <input type="submit" value='Criar Post' className="btn"/>
      </form>
    </div>
  );
};

export default NewPost;

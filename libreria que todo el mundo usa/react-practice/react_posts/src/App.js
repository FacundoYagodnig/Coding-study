import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";
import useFetch from "../src/hooks/useFetch";

const postId = [1, 2, 3, 4, 5, 6, 7, 8];

// const fetchPost = async (id) => {
//   const apiCall = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const respuesta = await apiCall.json();

//   if (!respuesta.body) {
//     throw new Error("Algo salio mal!!");
//   }
//   return respuesta;
// };

const App = () => {
  const [index, setIndex] = useState(1);
  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId[index]}`
  );

  const incrementIndex = () => {
    setIndex((prevIndex) => {
      return prevIndex === postId.length - 1 ? postId[0] : prevIndex + 1;
    });
  };

  if (loading) {
    return (
      <div className="card">
        <p>...loading</p>{" "}
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <p>{error}</p>{" "}
      </div>
    );
  }

  return (
    <div className="card">
      {index === postId.length - 1 ? (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <h2> {index} </h2>
          <button onClick={incrementIndex}>Siguiente Post</button>
        </>
      ) : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <h2> {index} </h2>
          <button onClick={incrementIndex}>Siguiente Post</button>
        </>
      )}
    </div>
  );
};
export default App;

render(React.createElement(App), document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//stateless functional component
//always return JSX

//JSX rules
//className instead of class
//close every element
//return only one element

function Booklist() {
  return (
    <section className="booklist">
      <Livro />
      <Livro />
      <Livro />
      <Livro />
      <Livro />
    </section>
  );
}

const Livro = () => {
  return (
    <article className="book">
      <Capa></Capa>
      <Titulo></Titulo>
      <Autor></Autor>
    </article>
  );
};

const Capa = () => (
  <img src="https://m.media-amazon.com/images/I/512ERYcB18L.jpg" alt="" />
);

const Titulo = () => <h1>O guia do mochileiro das galáxias</h1>;

const Autor = () => <h4>Douglas Adams</h4>;

ReactDOM.render(<Booklist />, document.getElementById("root"));

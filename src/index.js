import React from "react";
import ReactDOM from "react-dom";

//stateless functional component
//always return JSX

//JSX rules
//className instead of class
//close every element
//return only one element

function Booklist() {
  return (
    <section>
      <Livro />
    </section>
  );
}

const Livro = () => {
  return (
    <article>
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

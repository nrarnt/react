import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { livros } from "./livros";
import Livro from "./Livro";

function Booklist() {
  return (
    <section className="booklist">
      {livros.map((livro, index) => {
        return <Livro key={livro.id} {...livro}></Livro>;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));

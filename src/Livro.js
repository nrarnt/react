import React from "react";

const Livro = ({ capa, titulo, autor }) => {
  return (
    <article className="book">
      <img src={capa} alt="" />
      <h1>{titulo}</h1>
      <h4>{autor}</h4>
    </article>
  );
};

// Somente um default export por arquivo

export default Livro;

// const Livro = () => {
//   return (
//     <article className="book">
//       <Capa></Capa>
//       <Titulo></Titulo>
//       <Autor></Autor>
//     </article>
//   );
// };

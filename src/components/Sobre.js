import React from "react";
import "../style.css/sobre.css";

const Sobre = () => {
  return (
    <div className="sobre">
      <div className="sobre-mim">
        <h1 className="h1-sobre">Sobre mim</h1>
        <p className="intro">Introdução</p>
        <div className="introducao">
          <p className="gavinhos">
            Sou Rafael Gavinhos, desenvolvedor Full Stack apaixonado por criar
            soluções completas e eficientes. Crio interfaces interativas e APIs
            robustas. Comprometido com qualidade e sempre em busca de desafios
            <br></br>
            <br></br>
            Tenho uma mentalidade orientada para soluções e estou sempre
            comprometido com a qualidade do código que produzo. Estou
            constantemente buscando aprender novas tecnologias e aprimorar
            minhas habilidades para impulsionar a inovação no campo do
            desenvolvimento de software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

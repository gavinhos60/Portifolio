import React from "react";

import js from "../image/js.png";
import html from "../image/html.png";
import css from "../image/css.png";
import react from "../image/react.png";
import node from "../image/node.png";
import asp from "../image/asp.png";
import c from "../image/c.png";
import sql from "../image/sql.png";
import plsql from "../image/plsql.png";
import mongo from "../image/mongo.png";
import git from "../image/git.png";
import azure from "../image/azure.png";
import "../style.css/experiencias.css";

const Experiencias = () => {
  return (
    <div className="experiencias">
      <div className="minhas-exp">
        <p className="p-exp">Minhas experiencias</p>
        <p className="p-hab">Tecnologias</p>
        <div className="linguagens-1">
          <div className="javascript">
            <img className="html" alt="html" src={html} />  
            <p className="font">HTML</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="css" src={css} />  
            <p className="font">CSS</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="js" src={js} />  
            <p className="font">JavaScript</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="react" src={react} />  
            <p className="font">React</p>          
          </div>
        </div>
        <div className="linguagens-1">
          <div className="javascript">
            <img className="html" alt="node" src={node} />  
            <p className="font">Node.js</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="asp" src={asp} />  
            <p className="font">Asp .net</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="c" src={c} />  
            <p className="font">C#</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="sql" src={sql} />  
            <p className="font">Sql Server</p>          
          </div>
        </div>
        <div className="linguagens-1">
          <div className="javascript">
            <img className="html" alt="plsql" src={plsql} />  
            <p className="font">PlSql</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="mongo" src={mongo} />  
            <p className="font">MongoDB</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="git" src={git} />  
            <p className="font">Git</p>          
          </div>
          <div className="javascript">
            <img className="html" alt="azure" src={azure} />  
            <p className="font">Azure DevOps</p>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencias;

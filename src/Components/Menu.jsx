import { NavLink } from "react-router-dom"
import atom from "../assets/skills/atom.png"
import css from "../assets/skills/css-3.png"
import html from "../assets/skills/html-5.png"
import  js from "../assets/skills/js.png"
import ts from "../assets/skills/typescript.png"
import node from "../assets/skills/node.png"
import express from "../assets/skills/express.png"
import mongodb from "../assets/skills/mongod.png"
import git from "../assets/skills/git.png"
import github from "../assets/skills/GitHubs.png"
import next from "../assets/nextjs-icon-svgrepo-com.svg"
const Menu = () => {
  return (
    <>
           <article className="roadmapArticle">
      <NavLink to={"/html"}>
      <div className="roadmapitem">
               <img src={html} alt="html5"/>
               <h2>Html 5</h2>
           <div className="arrow"></div>
           </div></NavLink>
            <NavLink to={"/css"}>
            <div className="roadmapitem">
               <img src={css} alt="css"/>
               <h2>Css</h2>
           <div className="arrow"></div>
           </div>
            </NavLink>

            <NavLink to={"/js"}> 
            <div className="roadmapitem">
               <img src={js} alt="js"/>
               <h2>Javascript</h2>
           <div className="arrow"></div>
           </div>
            </NavLink>

          <NavLink to={"/git"}>
          <div className="roadmapitem">
               <img src={git} alt="git"/>
               <h2>Git</h2>
               
           <div className="arrow"></div>
           </div></NavLink>
    <NavLink to={"/github"}>
           <div className="roadmapitem">
               <img src={github} alt="github"/>
               <h2>Github</h2>
               <div className="arrow"></div>
               
           </div>
    </NavLink>
    <NavLink to={"/react"}>
           <div className="roadmapitem">
               <img src={atom} alt="react"/>
               <h2>React.Js</h2>
               
           <div className="arrow"></div>
           </div>
    </NavLink>

         <NavLink to={"/node"}> 
         <div className="roadmapitem">
               <img src={node} alt="node"/>
               <h2>Node.Js</h2>
           <div className="arrow"></div>
           </div>
         </NavLink>
        <NavLink to={"/express"}>
            
           <div className="roadmapitem">
               <img src={express} alt="express"/>
               <h2>Express.Js</h2>
           <div className="arrow"></div>
           </div>
        </NavLink>

            <NavLink to={"/mongodb"}>
            <div className="roadmapitem">
               <img src={mongodb} alt="mongodb"/>
               <h2>MongoDB</h2>
           <div className="arrow"></div>
           </div>
            </NavLink>
            <NavLink to={"/ts"}>
                
           <div className="roadmapitem">
               <img src={ts} alt="ts"/>
               <h2>Typescript</h2>
               <div className="arrow"></div>

           </div>
            </NavLink>
          <NavLink to={"/next"}>
          <div className="roadmapitem">
               <img src={next} alt="ts"/>
               <h2>Next.Js</h2>
               <div className=" arrow arrow-finish"></div>

           </div>
          </NavLink>
           </article>
       <h2 className="press">press one to start </h2>

    </>
  )
}

export default Menu

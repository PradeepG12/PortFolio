import React from 'react'
import './projects.css'
import './Project-card'
import Card from './Project-card'
import onlineshopCard from '../../assets/Cards/OnlineShopping.jfif'
import Chatapp from '../../assets/Cards/Chat app.jfif'
import Socialmedia from '../../assets/Cards/Socialmedia.jfif'
import Todolist from '../../assets/Cards/Todolist.jfif'


const projects = [
  {title: "Amazon Shopping Website",img : onlineshopCard ,details : "Basic function to order,track,add in cart for all produccts ",link:""},
  {title: "Social Media Application",img : Socialmedia ,details : "Basic CRUD operations can perform in this web",link:""},
  {title: "Chat-App",img : Chatapp,details : "Group and Individual chats application",link:""},
  {title: "To-do List",img : Todolist,details : "It is used for Daily task Remainder",link:""},
  {title: "To-do List",img : Todolist,details : "It is used for Daily task Remainder",link:""},
  {title: "To-do List",img : Todolist,details : "It is used for Daily task Remainder",link:""},
  {title: "To-do List",img : Todolist,details : "It is used for Daily task Remainder",link:""},

]

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className="proj-container">
        
        {projects.map((item,index)=>{
          return(<Card item={item} key={index} index ={index}/>)
        })}

      </div>
    </div>
  )
}

export default Projects
import React from 'react'
import '../css/skills.css'
import Counter from './Counter'

const skill = [
  {title:"HTML 5",knowed:88,width:124},{title:"CSS 3",knowed:70,width:150},{title:"JavaScript",knowed:60,width:175},{title:"Java [CORE]",knowed:55,width:200},
  {title:"React",knowed:60,width:174},{title:"Node JS [Express JS}",knowed:60,width:175},{title:"Mongo DB",knowed:70,width:154}
]

const Skills = () => {
  
  return (
    <div className='skills' id='skills'>
      <h1>MY SKILLS</h1>
      <div className="container">
        {skill.map((item,index)=>{
          return(
            <div className="box" key={index}>
              <div className="outer">
                  <div className="inner"><span id="count"><Counter target={item.knowed}/>%</span></div>
              </div>
              
              <svg>
                  <circle id="c2" cx="70.6" cy="69.80" r="60" strokeWidth="102" stroke="blue" strokeDasharray={item.width}/>
              </svg>
              <h2>{item.title}</h2>
            </div>
          )
        })}
      </div>

{/*       
      <section className="container">
        <p className="name">HTML 5</p>
        <div className="html">
          <div className="color" style={{width: "90%"}}></div>
        </div>
      </section>
      <section className="container">
        <p className="name">CSS 3</p>
        <div className="html">
          <div className="color" style={{width: "85%"}}></div>
        </div>
      </section>
      <section className="container">
        <p className="name">JAVASCRIPT</p>
        <div className="html">
          <div className="color" style={{width: "70%"}}></div>
        </div>
      </section>
      <section className="container">
        <p className="name">JAVA (CORE)</p>
        <div className="html">
          <div className="color" style={{width: "60%"}}></div>
        </div>
      </section> */}
    </div>
  )
}

export default Skills
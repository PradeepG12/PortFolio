import React from 'react'
import '../css/skills.css'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <h1>MY SKILLS</h1>
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
      </section>
    </div>
  )
}

export default Skills
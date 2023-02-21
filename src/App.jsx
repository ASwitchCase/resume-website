import { useState } from 'react'
import reactLogo from './assets/react.svg'
import pfp from './images/pfp.jpg'
import linkedin from './images/linkedin.png'
import githubimg from './images/github.png'

import phone from './images/phone.png'
import email from './images/email.png'
import address from './images/address.png'

import htmlimg from './images/html.png'
import cssimg from './images/css.png'
import javalimg from './images/java.png'
import javaScriptimg from './images/javaScript.png'
import pythonimg from './images/python.png'
import reactimg from './images/react.png'

import './App.css'
import Item from './components/Item'
import Skill from './components/Skill'

function App() {
  const[exp,setExp] = useState([
    {
    'title':'Hudson County Schools of Technology , AP Computer Science Tutor', 
    'date': 'October 1,2018',
    'text': 'Helped teach AP Computer science students how to create Java applications and assisted the instructor with grading.'
    },
    
    {
      'title':'Intern at the Office of innovation, City Hall', 
      'date': 'Summer of 2019',
      'text': 'Made powerpoints and spreadsheets. Wrote blog entries for innovatejc.org'
    },
    
    {
    'title':'Student Clerk, Visual Arts Building, NJCU', 
    'date': '2020-2023',
    'text': 'Developed a database application (VABL) for student locker assignments. Assisted with office work such as filing, creating schedules, and populating spreadsheets.'
    },
    
  ]);

  const[edu,setEdu] = useState([
    {
    'title':'County Prep High School', 
    'date': '2016 - June 2019',
    'text': 'AP Computer Science, AP Human Geography, Skills USA, Interactive Media Club, Computer Club.'
    },
    
    {
      'title':'New Jersey City University', 
      'date': '2019-2023',
      'text': 'Intended Graduation in May 2023 with a Bachelors in Computer Science.'
    },
  ]);

  return (
    <div className="App">
      <div className='page-container'>
        <div className='about-container'>
          <img className='pfp' src={pfp}></img>
          <h1>About</h1>
          <p>I am a computer science student and enthusiast, and not just to get a job. 
            I enjoy it. In my free time, I work on programming projects and experiment 
            with computers and other electronics. I am not a math genius, but I enjoy 
            problem solving and taking on projects that are bigger than me.</p>
          <hr></hr>

          <h1>Links</h1>
          <a href='https://www.linkedin.com/in/jacques-adams-20036b213/'><img className='link-img' src={linkedin}></img></a>
          <a href='https://github.com/ASwitchCase'><img className='link-img' src={githubimg}></img></a>
          
        </div>
        <div className='items-container'>
          <div className='contact-container'>
            <div className='contact'>
              <h1 className='name'>Jacques Adams</h1>
            </div>

            <div className='contact'>
              <br></br>
              <div className='info'>
                <img src={phone}></img>
                <h3>551-222-9882</h3>
              </div>

              <div className='info'>
                <img src={email}></img>
                <h3>adamsjacques546@gmail.com</h3>
              </div>

              <div className='info'>
                <img src={address}></img>
                <h3>Jersey City New Jersey</h3>
              </div>
              
              
            </div>
            
          </div>
          <hr></hr>
          <div className='items'>
            <Item title='Experience' data={exp}></Item>
            <Item title='Education' data={edu}></Item>

            <div className='item'>
            <h1>Skills</h1>
              <Skill imgurl={htmlimg} title='HTML'></Skill>
              <Skill imgurl={pythonimg} title='Python'></Skill>
              <Skill imgurl={javaScriptimg} title='JavaScript'></Skill>
              <Skill imgurl={javalimg} title='JAVA'></Skill>
              <Skill imgurl={cssimg} title='CSS'></Skill>
              <Skill imgurl={reactimg} title='React.js'></Skill>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default App

import './App.scss';
import React from 'react';
import Navbar from './components/Navbar';
import resume from './img/resume.svg'
import linkedin from './img/linkedin.svg'
import github from './img/github.svg'

import pdf from './img/Alex_Nakeeb_resume.pdf'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      content: 0
    }
    this.selectExperience = this.selectExperience.bind(this)
    this.selectEducation = this.selectEducation.bind(this)
    this.selectProjects = this.selectProjects.bind(this)
    

  }

  

  selectExperience() {
    this.setState({
      content: 0
    })
  }

  selectEducation() {
    this.setState({
      content: 1
    })
  }

  selectProjects() {
    this.setState({
      content: 2
    })
  }

  render() {
    let workSection
    if (this.state.content == 0) {
      workSection = (
        <div>
          <a class="item landingH1">Software Engineer Intern - Liberty Mutual</a>
          
          <p>Researched and presented cost / ease of use implications of summer project’s architecture</p>
          <p>Implemented asynchronous RESTful API using Spring Boot</p>
          <p>Managed AWS Redshift data warehouse using CDK and SQL commands</p>
          <p>Version Controlled project with Atlassian products and git to reinforce CI/CD pipeline</p>
          
          <a class="item landingH1">Teaching Assistant - Object Oriented Programming</a>
          <p>Introduced incoming Freshman to Java, Github, and Unix environments</p>
          <p>Provided students with lecturing and assistance during labs</p>
          
          <a class="item landingH1">Undergraduate Research Assistant</a>
          <p>Supported Dr. Lin Tan study the emerging topic of automatic program repair</p>
          <p>Collected, cleaned, and presented data using Python and R</p>
          
          <a class="item landingH1">Purdue COSINE Tutors</a>
          <p>Tutor Purdue students in subjects such as Calculus, Numerical Methods, and Discrete Mathematics</p>
        </div>
        
      )
    }
    else if (this.state.content == 1){
      workSection = (
        <div>

          <a class="item landingH1">Graduating May 2023</a>
          <p>GPA: 3.72/4, 4x Dean's List</p>
          <a class="item landingH1">CS Classes</a>
          <p>Intro to Analysis of Algorithms, Competitive Programming, Systems Programming, Data Structures and Algorithms, Computer Architecture, Programming in C, Object Oriented Programming</p>
          <a class="item landingH1">DS Classes</a>
          <p>Database Information Systems, Data Mining and Machine Learning, Statistics for Data Science, Intro to Data Science</p>
          <a class="item landingH1">Math Classes</a>
          <p>Probability, Numerical Methods, Multivariate Calculus, Calculus II, Calculus I, Discrete Math</p>
        </div>
      )
    }
    else {
      workSection = (
        <div>
          <a class="item landingH1" href="https://devpost.com/software/2cents-xd7afw">2cents</a>
          <p>Web page that monitors bank account using Plaid to donate rounded-up change to a charity of the user’s choice</p>
          <p>Crafted visuals to improve the user experience using Adobe Cloud Suites</p>
          <p>Produced css animations within website</p>
          <a class="item landingH1" href="http://isdtrack.herokuapp.com">TRACK</a>
          <p>Javascript application for teachers to track goals for special needs students</p>
          <p>Designed and implemented NodeJs backend and MongoDB database schemas</p>
          <p>Delegated tasks tailored to team members skillsets</p>
          <a class="item landingH1" href="http://anakeeb.github.io/financial-forecast-deploy">Financial Forecast</a>
          <p>React application that analyzes stock data with machine learning</p>
          <p>Imported TensorFlow.js to create and train convolutional neural network</p>
          <p>Extracted online stock data API</p>
        </div>
        
      )
    }


    return (
      <div>
        <Navbar/>
        <section>
          {/* <div class="row"> */}
          <br/>
          <br/>
            <div class="wrapperContainer">
              <div class="wrapper">
                
                <div class="static-txt landingH1">In need of a</div>
                <ul class="dynamic-txts landingH1">
                  <li><span>Software Engineer?</span></li>
                  <li><span>Data Scientist?</span></li>
                  <li><span>UX Designer?</span></li>
                  <li><span>Project Manager?</span></li>
                </ul>
              </div>
            </div>
            
          {/* </div> */}
          
          
        </section>
        <section class="smallSection">
          <div class='rowTop'>
            <div class='col'>
              

              <p class='landingP'>
                Junior at Purdue University majoring in Computer Science, Data Science, and Statistics, with a minor in Mathematics.
              </p>
              <div class="rowBtn">
                <a class='btnGradientResume container' href="https://github.com/anakeeb">
                  <img src={github} class="resume"/>
                </a>
                <a class='btnGradientResume container' href="https://www.linkedin.com/in/alex-nakeeb/">
                  <img src={linkedin} class="resume"/>
                </a>
                <a class='btnGradientResume container' href={pdf} download>
                  <img src={resume} class="resume"/>
                </a>
              </div>
              
                
                
                
              
            </div>
            
            
            
          </div>
        </section>
        
        <section class="bigSection">
          <div class="row">
            <div class="col">
              <div class="content">
                <div class="card" onClick={this.selectExperience}>
                  
                  <span class="icon"><i class="fas fa-building"></i></span>
                  <p class="title">Experience</p>
                  <p class="text">How I afford rent</p>
                  
                </div>
                <div class="card" onClick={this.selectEducation}>
                  
                  <div class="icon"><i class="fas fa-graduation-cap"></i></div>
                  <p class="title">Education</p>
                  <p class="text">A gentleman and a scholar</p>
                  
                </div>
                <div class="card" onClick={this.selectProjects}>
                  
                  <div class="icon"><i class="fas fa-laptop-code"></i></div>
                  <p class="title">Projects</p>
                  <p class="text">What I've been working on</p>
                  
                </div>
                
            

            
            </div>



              {workSection}
            </div>
            
          </div>
          

         
            
          
          
          

        </section>
        
        
        
        <div class='wave'>
              <svg
                viewBox='0 0 500 150'
                preserveAspectRatio='none'
                class='svgStyle'
              >
                <path
                  d='M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z'
                  class='pathStyle'
                ></path>
              </svg>
            </div>
        <section class="grey col smaller">
          
          <div class="row">
            <div class="col">
              <h1 class="landingh1 bigFont">Please reach out!</h1>
              <div class='col flex-container'>
                <div class="unit">
                  <div class="heart">
                    <div class="heart-piece-02">
                    </div>
                    <div class="heart-piece-12">
                    </div>
                    <div class="heart-piece-22">
                    </div>
                    <div class="heart-piece-32">
                    </div>
                    <div class="heart-piece-42">
                    </div>
                    <div class="heart-piece-52">
                    </div>
                    <div class="heart-piece-62">
                    </div>
                    <div class="heart-piece-72">
                    </div>
                    <div class="heart-piece-82">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
            

          

        </section>
        
        

        
      </div>
    )
  }
}



export default App;

import React from 'react'

import logo from '../img/anakeebLogo.svg'
import pdf from '../img/Alex_Nakeeb_resume.pdf'


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        window.location.href = `mailto:${'anakeeb@purdue.edu'}`;
    }

	render() {
		return(
			<div>
		      <div class="nav">
		          <div class="left">
                    <a>
		                <img src={logo} class='logo'/>
                    </a>
		          </div>
		          <div class="right">
                    <a class="item" href="https://github.com/anakeeb">
		              github
		            </a>
                    <a class="item" href="https://www.linkedin.com/in/alex-nakeeb">
		              linkedin
		            </a>
		            <a class="item" href={pdf} download>
		              resume
		            </a>
		            
                    
                    
		            <div class="">
		              <a class="btnGradient" onClick={this.onClick}>contact</a>
		            </div>
		            
		          </div>
		        </div>
		    </div>
		)
	}
}

export default Navbar;
import React from 'react'
import '../style33.css'
import Footer from './Footer'
import Footer2 from './Footer2'

function AboutUs() {
  return (
    <>
    <div><div className="banner text-center" style={{backgroundImage:"url(about.jpg)"}}>
    <h1 className="h">ABOUT US</h1>
    <p className="text">
          4u Management Consultancy Services is a Five year old Organisation.During these Five Years,it has provided Job Opportunities to many Candidates.With good placement Services And has gained a good Reputation.This Company Provides Services mainly in three states Punjab,Haryana,Himachal,Chandigarh.
          This Company has provided Job to Candidates in different fields.The Job Placement of This Company is Increasing Year by Year.With which the highest Companies have made Connections.The main Objective of this Company is to provide placement to the Candidates as per their desire and ability.This Company has provided high quality Candidates to its Clients which has greatly increased their Performance And the Big enterpreneur has established his team by Tie-Up with it.</p>
      </div>
      <div className="container3">
        <div className="row">
          <div className="col-sm-4">
            {/* <img src="uuu.jpg" className="img2"> */}
          </div>
          <div className="col-sm-4">
            {/* <img src="iil.jpg" className="img2"> */}
          </div>
          <div className="col-sm-4">
            {/* <img src="za.jpg" width="400px;" height="400px;" className="img2"> */}
          </div>
        </div>
    </div>
 </div>

 <Footer/>
 </>
  )
}

export default AboutUs
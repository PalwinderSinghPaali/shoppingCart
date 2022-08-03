import React, { useState } from 'react';
import '../services.css'
export default function Services() {
  return (
    <div style={{backgroundImage:"url(contactimg.jpg)",height:"100%",width:"100%"}}>
  <div  style={{textAlign: "center",color:"white",paddingTop:"3vh"}}>
    <div ><h1>Why People Believe in Us</h1></div>
    <h5>Always render more and better service than <br />is expected of you, no matter what your ask may be.</h5>
    <div class="row" style={{justifyContent: "center"}}>
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> We're Free </div>
                    <div class="card-subtitle">
                        <p> <h5 class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a h5 fee from the professional after they meet your</h5> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/xUWJuHB.png" />
                    <div class="card-title"> We're Unbiased </div>
                    <div class="card-subtitle">
                        <p> <h5 class="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </h5> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <div class="card-title"> We Guide you </div>
                    <div class="card-subtitle">
                        <p> <h5 class="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</h5> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ft">
        <p class="chk"><h5  style={{color:"white"}}>Still not sure?</h5></p>
        <div class="btn btn-primary">Read All Testimonials</div>
    </div>
</div>

      </div>
     
               
 );
}

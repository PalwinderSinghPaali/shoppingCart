import React, { useState } from 'react';
import '../stylecon22.css'
      
export default function Contact() {
   return (
     

	<div style={{backgroundImage:"url(contactimg.jpg)",height:"100%",width:"100%"}}>
		<div style={{paddingTop:"2vw",color:"white",textAlign:"center"}}>
    <h1>Contact Us</h1>
      <p>We  would love to respond to your queries and help you succeed.Feel free to get in touch with us.</p></div>
		
		<div class="contact-box">
			<div class="contact-left">
				<h3>Sent your request</h3>
				<form>
					<div class="input-row">
						<div class="input-group">
							<label>Name</label>
							<input type="text" placeholder="" />
						</div>
							<div class="input-group">
							<label>Phone</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					      <div class="input-row">
							<div class="input-group">
							<label>Email</label>
							<input type="email" placeholder="" />
						</div>
							<div class="input-group">
							<label>Subject</label>
							<input type="text" placeholder="" />
						</div>
					</div>
					<label>Message</label>
					<textarea rows="5" placeholder="Your Message"></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
			<div class="contact-right">
				<h3>Reach Us</h3>
				<table class="table">
        <tr>
						<td>Email</td>
						<td>contact377777@gamil.com</td>
					</tr>
					<tr>
						<td>Phone</td>
						<td>+1 0123456789</td>
					</tr>
					<tr>
						<td>Address</td>
						<td>#212, Grounf Floor,7th cross</td><br></br>
							<td>Some layout, Some Road,Koromangla<br></br>
							Bengaluru 560001
						</td>
            </tr>
        </table>
				
				
			</div>
		</div>
	</div>
     
                
  );
}

import React from 'react'
import '../style1.css'

function Footer2() {
  return (
    <div><div>
    <section id="site-stats">
			<div className="container text-center">
				<h3>4U MANAGEMENT SITE STATS</h3>
				<div className="row">
					<div className="col-md-3">
						<div className="stats-box">
							<i className="fa fa-user lock"></i><span><small>100k+</small></span>
							<p>JOB SEEKERS</p>
						</div>
			</div>
			<div className="col-md-3">
						<div className="stats-box">
							<i className="fa-brands fa-slideshare lock"></i><span><small>500</small></span>
							<p>EMPLOYERS</p>
						</div>
			</div>
			<div className="col-md-3">
						<div className="stats-box">
							<i className="fa fa-hand-peace lock"></i><span><small>10k+</small></span>
							<p>ACTIVE JOBS</p>
						</div>
			</div>
						<div className="col-md-3">
						<div className="stats-box">
							<i className="fa fa-building lock"></i><span><small>10k+</small></span>
							<p>COMPANIES</p>
						</div>
			</div>
		</div>
        </div>
		</section>
    </div></div>
  )
}

export default Footer2
import React from 'react'
import '../Blogs.css'

function Blogs() {
  return (
    <div >
     <div >
      <section style={{height:"80vh",width:"40vw",margin:"auto"}}>
        <span class="heading"><h1>User Rating</h1></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <p>4.1 average based on 254 reviews.</p>
        <hr style={{border: "3px solid #f1f1f1"}} />

        <div class="row">
          <div class="side">
            <div>5 star</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-5"></div>
            </div>
          </div>
          <div class="side right">
            <div>150</div>
          </div>
          <div class="side">
            <div>4 star</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-4"></div>
            </div>
          </div>
          <div class="side right">
            <div>63</div>
          </div>
          <div class="side">
            <div>3 star</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-3"></div>
            </div>
          </div>
          <div class="side right">
            <div>15</div>
          </div>
          <div class="side">
            <div>2 star</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-2"></div>
            </div>
          </div>
          <div class="side right">
            <div>6</div>
          </div>
          <div class="side">
            <div>1 star</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-1"></div>
            </div>
          </div>
          <div class="side right">
            <div>20</div>
          </div>
        </div>
      </section>
      <section class="review-section">
        <section class="reviews" style={{width:"80vw",marginLeft:"5vw"}}>
          <span>
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Inventore magni expedita doloremque nemo hic eligendi dolores
            consequuntur rerum porro! Nobis impedit officia aperiam ipsa
            necessitatibus numquam. Unde ex iste earum? "
          </span>
          <div class="review-des">
            <img src="Blogs.png" alt="review" class="review-img" />
            <span>Jenny Starc</span>
          </div>
        </section>
        <section class="reviews" style={{width:"80vw",marginRight:"5vw"}}>
          <span>
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Inventore magni expedita doloremque nemo hic eligendi dolores
            consequuntur rerum porro! Nobis impedit officia aperiam ipsa
            necessitatibus numquam. Unde ex iste earum? "
          </span>
          <div class="review-des">
            <img src="blogs.jpg" alt="review" class="review-img" />
            <span>Mark HazleWood</span>
          </div>
        </section>
      </section>
    </div>


    </div>
  )
}

export default Blogs
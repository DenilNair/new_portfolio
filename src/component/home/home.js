import React from 'react'
import './home.css';
const Home = () => {
  const downloadPdf=()=>{

    
    console.log("vbfsdvjkgh");
};
  return (
    <div className='mainHome'>
      <div>
        <div className="gridClass">
          <div class="outer-grid">
            <div class="grid-item">Hi there I'am Denil Software developer based in India </div>
            <div class="grid-item"></div>

            <div class="grid-item">
              <img className="image" src="https://picsum.photos/800/600?random=2" alt="project1" />
            </div>
          </div>
        </div>
        <div className="gridClass">
          <div class="outer-grid">
            <div class="grid-item">
              
        <button className='downloadCV' onClick={downloadPdf}>Get My CV</button>
            </div>
            <div class="grid-item"></div>

            <div class="grid-item">
               </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
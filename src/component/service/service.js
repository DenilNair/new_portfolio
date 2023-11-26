import React from 'react'
import './service.css';
import Card from '../cards/card';
const Service = () => {
  return (
    <div className='mainService'>
      <div>service</div>
      <div><h4>Technologies</h4><div>
        <div >

          <div class="outer-grid">


            <div class="grid-item">Previous</div>
            <div class="grid-item">
              <div class="inner-grid">
                <div class="grid-item"><Card passedData="Angular" passedImage={process.env.PUBLIC_URL + "/img/angular.png"} /></div>
                <div class="grid-item"><Card passedData="Java" passedImage={process.env.PUBLIC_URL + "/img/java.jpg"} /></div>
                <div class="grid-item"><Card passedData="Node JS" passedImage={process.env.PUBLIC_URL + "/img/node.png"} />
                </div>
                <div class="grid-item"><Card passedData="Oracle Database" passedImage={process.env.PUBLIC_URL + "/img/oracle.png"} />
                </div>
                <div class="grid-item"><Card passedData="React" passedImage={process.env.PUBLIC_URL + "/img/react.png"} />
                </div>
                <div class="grid-item"><Card passedData="Android" passedImage={process.env.PUBLIC_URL + "/img/android.jpg"} />
                </div>
                <div class="grid-item"><Card passedData="chrome-extension" passedImage={process.env.PUBLIC_URL + "/img/extension.jpg"} />
                </div>
                <div class="grid-item"><Card passedData="Javascript" passedImage={process.env.PUBLIC_URL + "/img/js.png"} />
                </div>
                <div class="grid-item"><Card passedData="spring-boot" passedImage={process.env.PUBLIC_URL + "/img/springboot.png"} />
                </div>
                <div class="grid-item"> <Card passedData="ionic" passedImage={process.env.PUBLIC_URL + "/img/ionic.png"} />
                </div>

              </div>
            </div>

            <div class="grid-item">Next</div>
          </div>


          <div ><button className='controls'>Previous</button>
          </div>
          <div className='slider-container'>
            <div className='slider'>
              <Card passedData="Angular" passedImage={process.env.PUBLIC_URL + "/img/angular.png"} />

              <Card passedData="Java" passedImage={process.env.PUBLIC_URL + "/img/java.jpg"} />
              <Card passedData="Node JS" passedImage={process.env.PUBLIC_URL + "/img/node.png"} />
              <Card passedData="Oracle Database" passedImage={process.env.PUBLIC_URL + "/img/oracle.png"} />
              <Card passedData="React" passedImage={process.env.PUBLIC_URL + "/img/react.png"} />
              <Card passedData="spring-boot" passedImage={process.env.PUBLIC_URL + "/img/springboot.png"} />
              <Card passedData="ionic" passedImage={process.env.PUBLIC_URL + "/img/ionic.png"} />
              <Card passedData="Android" passedImage={process.env.PUBLIC_URL + "/img/android.jpg"} />
              <Card passedData="chrome-extension" passedImage={process.env.PUBLIC_URL + "/img/extension.jpg"} />
              <Card passedData="Javascript" passedImage={process.env.PUBLIC_URL + "/img/js.png"} />
            </div>
          </div>
          <div><button className='controls'>Next</button></div>

        </div>

      </div>
      </div>

    </div>

  )
}

export default Service
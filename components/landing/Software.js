import React from 'react'
import { Row, Col } from 'reactstrap'
import analytic from '../../assets/imgs/landingpage/analytic.png'
import userfriendly from '../../assets/imgs/landingpage/userfriendly.png'
import support from '../../assets/imgs/landingpage/support.png'
import torus from '../../assets/imgs/landingpage/torus.png'
import cone from '../../assets/imgs/landingpage/cone.png'
import spherespring from '../../assets/imgs/landingpage/spherespring.png'

function Software({showHeadings = false, showConeIcon = false, showTorusIcon = false, showSphereIcon = false}) {
  return (
    <>
    <section className="software">
      {showHeadings && <div className="head-info">
          <h2 className='text-center'>No more missed Opportunities.</h2>
          <p className='text-center'>Packed with advanced features</p>
        </div>}
        
        <Row>
          <Col sm={12} md={4}>
            <div className="userfriendly">
              {showConeIcon && <img src={cone} alt="cone" className="cone" />}
              
              <img width={"100%"} src={userfriendly} className="software-img" alt="userfriendly" />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="analytic">
              {showTorusIcon && <img src={torus} alt="torus" className="torus" />}
              
              <img width={"100%"} src={analytic} className="software-img" alt="analytic" />
            </div>

          </Col>
          <Col sm={12} md={4}>
            <div className="support">
              {showSphereIcon && <img src={spherespring} alt="spherespring" className='spherespring'/>}
              
              <img width={"100%"} height={"475px"} src={support} className="software-img" alt="support" />
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Software
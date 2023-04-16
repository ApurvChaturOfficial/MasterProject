import React from 'react'
import './index.css';
import ME1 from '../../../../hAssets/me-about.jpg'
import { FaAward } from 'react-icons/fa';

const About = ({Redux}) => {
  // Variables
	const object = Redux.state.ReceivedObject.AboutList

	// JSX
  return (
    object && 
    <section id='about'>
      <h5>{object.title}</h5>
      <h2>{object.subTitle}</h2>

      <div className='container about__container' >
        <div className='about__me' >
          <div className='about__me-image' >
            <img src={"object.image.url"} />
          </div>
        </div>

        <div className='about__content' >
          <div className="about__cards">
            {object.cards &&
              object.cards.map(each => {
              return (
                <article className='about__card' >
                  <FaAward className='about__icon' ></FaAward>
                  <h5>{each.title}</h5>
                  <small>{each.sub_title}</small>
                </article>
              )
            })}
            {/* <article className='about__card' >
              <p className='about__icon' ></p>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            
            <article className='about__card' >
              <p className='about__icon' ></p>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            
            <article className='about__card' >
              <p className='about__icon' ></p>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article> */}
          </div>

          <p>{object.description}</p>

          <a href='#contact' className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>            
    </section>
  )
}

export default About
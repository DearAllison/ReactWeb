import React from 'react'
import './HomeLeadership.css'
import image from '../../asset/home/pexels-fauxels-3183188.jpg'

const HomeLeadership = () => {
  return (
    <div className='home-leadership'>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4 className="h4-bold">Leadership</h4>
        <div>
          <h6>******</h6>
          <p className='p-bold'>Founder and CEO</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div>
          <h6>******</h6>
          <p className='p-bold'>Program Director</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  )
}
export default HomeLeadership
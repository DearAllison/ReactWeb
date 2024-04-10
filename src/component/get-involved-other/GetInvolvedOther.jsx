import React from 'react'
import './GetInvolvedOther.css'

const GetInvolvedOther = () => {
  return (
    <div className='get-involved-other'>
      <div>
        <h4 className='h4-bold'>Donation</h4>
        <p>Support our mission securely and conveniently via PayPal. Your generous donation empowers us to offer crucial educational resources, and support programs for families in need.</p>
        <button className="blue-square-button"><a href="">Donate Through PayPal</a></button>
      </div>
      <div>
        <h4 className='h4-bold'>Wishlist</h4>
        <p>Visit our Amazon Wishlist to browse a  selection of educational materials, books, and school supplies. Your donation will be shipped to us, ensuring that it reaches those in need.</p>
        <button className="blue-square-button"><a href="" target="_blank" rel="noopener noreferrer">Browse Amazon Wishlist</a></button>
      </div>
    </div>
  )
}

export default GetInvolvedOther
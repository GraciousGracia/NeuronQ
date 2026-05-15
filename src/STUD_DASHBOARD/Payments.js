import React, { useState } from 'react'
import logo from '../IMAGES/LOGO.jpg'
function Payments() {
  const [check,setcheck] = useState('')
  const [paydata,setpaydata] = useState([
    {
      'Option' : 'Pay full get a discount',
      'Description' : 'Make a one time payment and pay 400 USD instead of 450 USD'
    },{
      'Option' : 'Pay on two installments',
      'Description' : 'Pay half of 450 USD (225 USD) and complete it in 4 months time'
    },{
      'Option' : 'Pay on monthly installments',
      'Description' : 'Split cost and pay each month of your learning (450 / 8 = 56.25 USD per month)'
    },
  ])
  return (
    <main className='studpages'>
        <img src={logo} className='dashlogo'/>
        <div className='paybck'>
          <p className='feetxt'>Fees and payments for your course</p> 
          {/* <div className='lockedpay'>
            <h4 className='owetxt'>Abigail make your payment to continue learning and accessing all features on your dashboard</h4>
              <div className='paybox'>
                <ul className='ulpay'>
                  <li>Course</li>
                  <li>Country</li>
                  <li>Total cost</li>
                  <li>Prefered payment option</li>
                  <li>Payed installment</li>
                  <li>Owing amount</li>
                  <li>Prefered payment mode</li>
                </ul>
                <ul className='ulpay' style={{listStyle:'none'}}>
                  <li>Full-stack web development</li>
                  <li>England</li>
                  <li>450 USD (379.66 EU)</li>
                  <li>Monthly installments</li>
                  <li>56.25 USD (47.45 EU)</li>
                  <li>56.25 USD (47.45 EU)</li>
                  <li>Credit card (You can choose a different method while paying)</li>
                </ul>
              </div>
              <button className='makepay'>Make payment</button>
            </div> */}
            {/* <div className='paybox'>
              <ul className='ulpay'>
                <li>Course</li>
                <li>Country</li>
                <li>Total cost</li>
                <li>Prefered payment option</li>
                <li>Payed installment</li>
                <li>Remaining installment</li>
                <li>Upcoming amount to pay</li>
                <li>Prefered payment mode</li>
                <li>Date to make remaining payment</li>
              </ul>
              <ul className='ulpay' style={{listStyle:'none'}}>
                <li>Full-stack web development</li>
                <li>England</li>
                <li>450 USD (379.66 EU)</li>
                <li>Monthly installments</li>
                <li>56.25 USD (47.45 EU)</li>
                <li>393.75 USD (331.89 EU)</li>
                <li>56.25 USD (47.45 EU)</li>
                <li>Credit card</li>
                <li>1 month (13/01/26)</li>
              </ul>
            </div>
          <button className='makepay'>Complete payment</button> */}
          {!check && (
            <div>
              <div className='payoptionbck'>
                <p className='newowingtxt'>Abigail make payment to start learning and have access to all features on your dashboard</p>
                <p style={{textAlign:'center',marginTop:"-10px"}}>Below are details and different payment options available for your learning track, <br></br>select your preffered option before proceeding to making payment</p>
                <div className='paybox'>
                  <ul className='ulpay'>
                    <li>Track</li>
                    <li>Cost</li>
                    <li>Cost converted to your country's (England) currency</li>
                  </ul>
                  <ul className='ulpay' style={{listStyle:'none'}}>
                    <li>Full-stack web development</li>
                    <li>450 USD</li>
                    <li>389.04 EU</li>
                  </ul>
                </div>
              </div>
              <ul className='uloptions'>
                {paydata.map((payments) => (
                  <li className='listoptions'>
                    <h5 style={{textAlign:"center"}}>{payments.Option}</h5>
                    <p style={{textAlign:'center'}}>{payments.Description}</p>
                    <button className='selectopt'>Select option and contimue</button>
                  </li>
                ))}
              </ul> 
            </div>
          )}
        </div>
    </main>
  )
}
        

export default Payments
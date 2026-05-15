import React from 'react'
import { FaEdit , FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../IMAGES/LOGO.jpg'
function TutPayments() {
  return (
    <main style={{overflowY:"hidden"}}>
      <img src={logo} className='dashlogo' style={{marginLeft:"200px"}}/>
      <div className='tutpayment' >
        <p className='payheadtxt'>Your payment details and insentives</p>

        <div className='paybox' style={{marginTop:"-20px"}}>
            <ul className='ulpay'>
              <li>Role</li>
              <li>Employment type</li>
              <li>Payment frequency</li>
              <li>Salary amount</li>
              <li>Last payment date</li>
              <li>Current payment status</li>
            </ul>
            <ul className='ulpay' style={{listStyle:'none'}}>
              <li>Backend web development tutor (Advanced level)</li>
              <li>Full-time</li>
              <li>Monthly</li>
              <li>170 USD</li>
              <li>01/08/25</li>
              <li>Paid</li>
            </ul>
        </div>
        <p className='accthead'>Account details</p>
        <div className='paybox' style={{marginTop:'-230px'}}>
            <ul className='ulpay'>
              <li>Payment method</li>
              <li>Account name</li>
              <li>Bank name</li>
              <li>Country</li>
              <li>Account number</li>
              <li>Routing number</li>
            </ul>
            <ul className='ulpay' style={{listStyle:'none',marginLeft:"40px"}}>
              <li>Bank transfer</li>
              <li>Owen Carmila</li>
              <li>Wesfargo</li>
              <li>U.S.A</li>
              <li>0912286229041190</li>
              <li>147100947822</li>
            </ul>
        </div>
        <FaEdit className='editacct'/>
        <div>
          <Link className='historylink' style={{marginLeft:'40%'}}>View payment history</Link>
        </div>
      </div>
    </main>
  )
}

export default TutPayments
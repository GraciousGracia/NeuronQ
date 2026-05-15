import React, { useState } from 'react'

function Payhistory() {
  const [history,sethistory] = useState([
    {
        'period' : 'March 2026',
        'Date' : '03/29/26',
        'method' : 'Mobile transfer',
        'Reference ID' : '0199ON33810',
        'Status' : 'Paid'
    },{
        'period' : 'April 2026',
        'Date' : '03/29/26',
        'method' : 'Mobile transfer',
        'Reference ID' : '8919Ov39810',
        'Status' : 'Paid'
    },{
        'period' : 'May 2026',
        'Date' : '03/29/26',
        'method' : 'Mobile transfer',
        'Reference ID' : '220679ON33810',
        'Status' : 'Paid'
    },{
        'period' : 'June 2026',
        'Date' : '03/29/26',
        'method' : 'Mobile transfer',
        'Reference ID' : '0199ON33810',
        'Status' : 'Paid'
    },{
        'period' : 'July 2026',
        'Date' : '03/29/26',
        'method' : 'Mobile transfer',
        'Reference ID' : '0199ON33810',
        'Status' : 'Paid'
    },{
        'period' : 'August 2026',
        'Date' : '03/29/26',
        'method' : 'Mobile transfer',
        'Reference ID' : '0199ON33810',
        'Status' : 'Paid'
    }
  ])
  return (
    <main>
        <p style={{textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>Your payments history and records</p>
        <div className='historybck'>
            {history.map((records) => (
                <li className='historybox'>
                    <p style={{textAlign:"center",fontSize:'20px',fontWeight:'bold'}}>{records.period}</p>
                    <div className='listholdhist'>
                        <ul className='ulpay'>
                            <li>Date of payment</li>
                            <li>Method of payment</li>
                            <li>Reference ID</li>
                            <li>Status</li>
                        </ul>
                        <ul className='ulpay' style={{listStyle:'none'}}>
                            <li>{records.Date}</li>
                            <li>{records.method}</li>
                            <li>{records['Reference ID']}</li>
                            <li>{records.Status}</li>
                        </ul>
                    </div>
                    <button className='receiptbtn'>View receipt</button>
                </li>
            ))}
        </div> 
    </main>
  )
}

export default Payhistory
import React from 'react'
import Row from './Row'

function table(props) {

  
  return (
    <div className="personal-details">
        <table >
           <thead>
           <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
           </thead>

      <tbody>
      {props.data ?   <Row data={props.data}/> : null}
        </tbody>

        </table>
    </div>
  )
}

export default table
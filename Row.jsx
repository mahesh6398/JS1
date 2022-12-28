import React from 'react'

function Row(props) {

    console.log(props)
  return (
    <>

    <tr>
        <td>{props.data.name}</td>
        <td>{props.data.address}</td>
        <td>{props.data.phone}</td>
        <td>{props.data.email}</td>
    </tr>

    </>
  )
}

export default Row
import React from 'react'

const Notification = ({Notfy}) => {
  return (
    <div>

        {Notfy && <p> You have a Notification</p>}
    </div>
  )
}

export default Notification
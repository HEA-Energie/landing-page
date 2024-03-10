import React from 'react'
import { IconType } from 'react-icons'
import { LuFileBarChart } from 'react-icons/lu'

const CardIcon = ({ icon }) => (
  <div className="flex justify-items-center justify-center">
    {React.createElement(icon, {
      size: 50,
      className: 'text-primary',
    })}
  </div>
)

export default CardIcon

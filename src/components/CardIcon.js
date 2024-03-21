import React from 'react'
import { IconType } from 'react-icons'
import { LuFileBarChart } from 'react-icons/lu'

const CardIcon = ({ icon }) => (
  <div className="flex p-4 self-center rounded-full bg-primary">
    {React.createElement(icon, {
      size: 50,
      className: 'text-white',
    })}
  </div>
)

export default CardIcon

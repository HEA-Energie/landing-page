import React from 'react'

const Card = ({ className, children }) => (
  <div
    className={`p-12 rounded-lg ${className} flex flex-col gap-4`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)',
    }}
  >
    {children}
  </div>
)

export default Card

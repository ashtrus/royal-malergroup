import React from 'react'

const MainHeader = ({ title }) => (
  <>
    <h2 className="text-uppercase text-center">{title}</h2>
    <div
      style={{
        width: '80px',
        height: '2px',
        backgroundColor: '#331a78',
        margin: '2em auto',
      }}
    />
  </>
)

export default MainHeader

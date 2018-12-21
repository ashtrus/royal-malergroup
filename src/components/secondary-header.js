import React from 'react'

const SecondaryHeader = ({ title }) => (
  <>
    <h2
      className="text-uppercase text-center"
      style={{
        fontSize: '16px',
      }}
    >
      {title}
    </h2>
    <div
      style={{
        width: '40px',
        height: '2px',
        backgroundColor: '#331a78',
        margin: '1em auto',
      }}
    />
  </>
)

export default SecondaryHeader

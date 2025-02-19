import React from 'react'

const Wave = ({ children }: any) => {
    const css = {
        width: '100%',
        height: '90px'
    }
  return (
      <div style={css}>
          {children}
    </div>
  )
}

export default Wave
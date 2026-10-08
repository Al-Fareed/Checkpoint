import React from 'react'

const Input = ({type,placeholder,style}: { type: string; placeholder: string; style: React.CSSProperties }) => {
  return (
    <input type={type} placeholder={placeholder} style={style} />
  )
}

export default Input
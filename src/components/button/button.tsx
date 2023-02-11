import React, { ReactNode } from 'react'
import { ButtonWrapp } from './style'

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({children, onClick, ...props}: ButtonProps) => {
  return (
    <ButtonWrapp 
    type='button'
    onClick={onClick}
    {...props}
    >
      {children}
    </ButtonWrapp>
  )
}

export default Button
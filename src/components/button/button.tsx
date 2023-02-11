import React, { ReactNode } from 'react'
import { Container, Icon, IconArea, Label} from './style'

type ButtonProps = {
  children?: ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  label: string;
  icon?: any;
}

const Button = ({children, onClick, label, icon}: ButtonProps) => {
  return (
    <Container onClick={onClick}>
      {icon && 
        <IconArea>
          <Icon src={icon} alt=''/> 
        </IconArea>
      }      
      <Label>{label}</Label>
    </Container>
    
  )
}

export default Button
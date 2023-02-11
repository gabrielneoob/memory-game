import React from 'react'
import {Container, Label, Value} from './style'

type Props = {
  label: string;
  value: string;
}

const InfoItem = ({label, value}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>    
    </Container>
  )
}

export default InfoItem
import React, { ReactNode } from 'react'
import * as C from './style'

type ContainerProps = {
  children: ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <C.ContainerWrap>
      {children}
    </C.ContainerWrap>
  )
}

export default Container
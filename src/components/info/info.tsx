import React from 'react'
import Button from '../button'
import * as C from './style'
import InfoItem from '../infoItem'

const Info = () => {
  return (
    <C.InfoWrapped>
      <C.InfoArea>
        <InfoItem label='Tempo' value='00:00'/>
        <InfoItem label='Movimentos' value='0'/>
      </C.InfoArea>

      <Button>Reiniciar</Button>
    </C.InfoWrapped>
  )
}

export default Info
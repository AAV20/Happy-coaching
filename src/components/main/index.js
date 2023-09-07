import React from 'react'
import Strategies from './home/Strategies'
import Areas from './home/Areas'
import Cliets from './home/Cliets'
import Motivated from './home/Motivated'
import Potential from './home/Potential'
import Session from './home/Session'


export default function Parent() {
  return (
    <div>
      <Strategies/>
      <Areas/>
      <Cliets/>
      <Motivated/>
      <Potential/>
      <Session/>
    </div>
  )
}

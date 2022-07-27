import React from 'react'
import {Image, Reveal } from 'semantic-ui-react'

export default function Vestel() {
  return (
    <Reveal animated='move' instant>
    <Reveal.Content visible>
      <Image src='https://pbs.twimg.com/profile_images/1527521140025004040/NAcUvv_f_400x400.jpg' size='medium' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://pbs.twimg.com/profile_images/1527521140025004040/NAcUvv_f_400x400.jpg' size='medium' />
    </Reveal.Content>
  </Reveal>

  )
}




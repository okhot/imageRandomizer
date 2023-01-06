import React from 'react'
import Button from '../../atoms/buttons/Button'
import HeaderStyle from '../heroSection/HeroSection.module.css'

export default function HeroSection({useGenerate}) {

  return (
    <div className={HeaderStyle.header}>
      <h1>Rando</h1>
      <Button onBtnClick={useGenerate}>Randomize</Button>
    </div>
  )
}

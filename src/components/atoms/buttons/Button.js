import React from 'react'
import ButtonStyle from "../buttons/Button.module.css"

export default function Button({children, onBtnClick}) {

  return (
    <div className={ButtonStyle.button}>
      <button onClick={onBtnClick}>{children}</button>
    </div>
  )
}

import { type } from 'os'
import React from 'react'

type ButtonName = string
type ButtonStyles = {
  [key: string]: string
}
type OnClickHandler = (event: React.SyntheticEvent) => void

type ButtonProps = {
  name: ButtonName
  cssStyle?: ButtonStyles
  onClickHandler: OnClickHandler
}

export const Button = ({
  name: value,
  cssStyle,
  onClickHandler,
}: ButtonProps) => {
  return (
    <>
      <button style={{ ...cssStyle }} onClick={onClickHandler}>
        {value}
      </button>
    </>
  )
}

import React from 'react'

type DisplayValue<T> = number

type ScreenProps<T> = {
  valueToDisplay: DisplayValue<T>
}

export const Screen = <T,>({ valueToDisplay }: ScreenProps<T>) => {
  return <div>{`${valueToDisplay}`}</div>
}

import React from 'react'
import { Button } from '../component/Button/Button'
import { Screen } from '../component/Screen/Screen'
import { useState } from 'react'

export const Main = () => {
  const [counterState, setConterState] = useState<number>(0)

  const incrementHandler = (event: React.SyntheticEvent): void => {
    return setConterState((currentState) => ++currentState)
  }
  const decrementHandler = (): void => {
    counterState == 0
      ? setConterState(0)
      : setConterState((currentState) => --currentState)
  }

  return (
    <div>
      <div>
        <Screen valueToDisplay={counterState} />
      </div>
      <div>
        <Button
          name="+"
          cssStyle={{ backgroundColor: 'red' }}
          onClickHandler={incrementHandler}
        />
        <Button
          name="-"
          cssStyle={{ backgroundColor: 'gold' }}
          onClickHandler={decrementHandler}
        />
      </div>
    </div>
  )
}

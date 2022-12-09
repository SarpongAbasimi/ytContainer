import React from 'react'
import { Button } from '../component/Button/Button'
import { Screen } from '../component/Screen/Screen'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import {
  incrementHandler,
  decrementHandler,
} from '../redux/reducers/counterReducer'

import { RootState } from '../redux/store/store'

export const Main = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
  const initialState = useAppSelector((state) => state.countReducer.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Screen valueToDisplay={initialState} />
      </div>
      <div>
        <Button
          name="+"
          cssStyle={{ backgroundColor: 'red' }}
          onClickHandler={() => dispatch(incrementHandler())}
        />
        <Button
          name="-"
          cssStyle={{ backgroundColor: 'gold' }}
          onClickHandler={() => dispatch(decrementHandler())}
        />
      </div>
    </div>
  )
}

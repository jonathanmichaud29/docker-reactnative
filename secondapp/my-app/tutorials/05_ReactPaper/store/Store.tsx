import React, { createContext, useReducer, useContext, ReactNode } from 'react'
import { node } from 'prop-types'

export interface DarkStateProps {
  isDarkModeOn: boolean;
}
interface ActionProps {
  type: 'TOGGLE_THEME';
  payload:any;
}
const initialState = {
  isDarkModeOn: false,
}

function reducer(state:DarkStateProps, action:ActionProps) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkModeOn: action.payload,
      }
    default:
      return state
  }
}
const Store = createContext<DarkStateProps>(initialState)

interface StoreProps {
  children?: ReactNode;
}

function StoreProvider({ children }: StoreProps ) {
  return <Store.Provider value={useReducer(reducer, initialState)}>{children}</Store.Provider>
}

StoreProvider.propTypes = {
  children: node,
}
const useStateValue = () => useContext(Store)

export { initialState, Store, reducer, StoreProvider, useStateValue }
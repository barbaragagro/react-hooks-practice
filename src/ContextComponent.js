import React, {useContext} from 'react'
import { Context } from './App'
import './App.css'

export default function ContextComponent() {
    const darkTheme = useContext(Context)


    
  return (
    <div className='fontsize'>{darkTheme?'Dark Theme':'Light Theme'}</div>
  )
}

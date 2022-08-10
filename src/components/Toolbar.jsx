import React from 'react'
import '../assets/styles/toolbar.scss';

const Toolbar = () => {
  return (
    <div className='tool-bar'>
    <button className='tool-bar__btn brush' />
    <button className='tool-bar__btn rect' />
    <button className='tool-bar__btn circle' />
    <button className='tool-bar__btn eraser' />
    <button className='tool-bar__btn line' />
    <button className='tool-bar__btn image-1' />
    <input type='color' style={{marginLeft: 10}} />
    <button className='tool-bar__btn undo' />
    <button className='tool-bar__btn redo' />
    <button className='tool-bar__btn save' />    
    </div>
  )
}

export default Toolbar
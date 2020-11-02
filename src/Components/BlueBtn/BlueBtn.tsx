import React from 'react'

import './BlueBtn.scss';

type IProps = {
  title: string
  onClickHandler: () => void
}

const BlueBtn = ({title, onClickHandler}: IProps) => {
  return (
    <button className="blue-btn"onClick={(evt) => {
      evt.preventDefault();
      onClickHandler();
    }}>{title}</button>
  )
}

export default BlueBtn

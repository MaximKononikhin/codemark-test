import React from 'react'

import './GreenBtn.scss';

type IProps = {
  title: string
  onClickHandler: () => void
}

const GreenBtn = ({title, onClickHandler}: IProps) => {
  return (
    <button className="green-btn" onClick={(evt) => {
      evt.preventDefault();
      onClickHandler();
    }}>{title}</button>
  )
}

export default GreenBtn

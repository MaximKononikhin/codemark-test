import React from 'react'

import './RedBtn.scss';

type IProps = {
  onClickHandler: () => void
}

const RedBtn = ({onClickHandler}: IProps) => {
  return (
    <button className="red-btn" onClick={(evt) => {
      evt.preventDefault();
      onClickHandler();
    }}>Очистить</button>
  )
}

export default RedBtn

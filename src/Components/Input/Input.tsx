import React from 'react';

import './Input.scss';

type IProps = {
  value: string,
  onChangeHandler: (tag: string) => void
}

const Input = ({value, onChangeHandler}: IProps) => {
  return (
    <input type="text" className="input" placeholder="Введите тег" value={value} onChange={(evt) => {
      onChangeHandler(evt.target.value);
    }}/>
  )
}

export default Input

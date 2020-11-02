import React from 'react';

import './Item.scss';

type IProps = {
  url: string
}

const Item = ({url}: IProps) => {
  return (
    <img className="gallery__item" src={url} alt=""/>
  )
}

export default Item

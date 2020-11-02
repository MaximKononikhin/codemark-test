import React from 'react'
import { useSelector } from 'react-redux';
import { IAppState, ImageType } from '../../types';
import Item from '../Item/Item';

import './GalleryRandom.scss';

const GalleryRandom = () => {
  
  const images = useSelector<IAppState, ImageType[]>(state => state.images);

  return (
    <ul className="gallery">
      {images.map((image) => <Item key={image.image} url={image.image}/>)}
    </ul>
  )
}

export default GalleryRandom

import React from 'react'
import { useSelector } from 'react-redux';
import { IAppState, ImageType } from '../../types';
import Item from '../Item/Item';
import './GalleryGroup.scss';

const GalleryGroup = () => {
  const requests = useSelector<IAppState, string[]>(state => state.requests);
  const images = useSelector<IAppState, ImageType[]>(state => state.images);

  return (
    <div>
      {requests.map(req => 
        <article className="gallery__group" key={req}>
          <h3>{req}</h3>
          {images.filter(image => image.title.toLocaleLowerCase().includes(req))
            .map(elem => <Item key={elem.image} url={elem.image}/>)
          }
        </article>
      )}
    </div>
  )
}

export default GalleryGroup

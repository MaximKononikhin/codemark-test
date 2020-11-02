import React, { useState } from 'react';

import BlueBtn from './Components/BlueBtn/BlueBtn';
import GreenBtn from './Components/GreenBtn/GreenBtn';
import Input from './Components/Input/Input';
import RedBtn from './Components/RedBtn/RedBtn';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState, ThunkDispatchType } from './types';
import { getImages, clearList, setRequest, clearReqList } from './Store/actions';
import GalleryRandom from './Components/GalleryRandom/GalleryRandom';
import GalleryGroup from './Components/GalleryGroup/GalleryGroup';

const App = () => {
  const [tag, setTag] = useState('');
  const [isRandom, setRandom] = useState(true);
  const dispatch = useDispatch<ThunkDispatchType>();
  const isLoading = useSelector<IAppState, boolean>(state => state.isLoading);
  const errorText = useSelector<IAppState, string>(state => state.errorText);

  return (
      <main className="search">
        <form className="search__form">
          <Input value={tag} onChangeHandler={setTag}/>
          <GreenBtn title={isLoading? 'Загрузка...' : 'Загрузить'} onClickHandler={() => {
            if (tag.length > 0) {
              dispatch(setRequest(tag.toLowerCase()));
              dispatch(getImages(tag));
            }
          }}/>
          <RedBtn onClickHandler={() => {
            setTag('');
            dispatch(clearList());
            dispatch(clearReqList());
          }}/>
          <BlueBtn title={isRandom? 'Сгруппировать' : 'Разгруппировать'} onClickHandler={() => setRandom(!isRandom)}/>
        </form>
        {errorText.length > 0 && <p className="search__error-msg">{errorText}</p>}
        {isRandom? <GalleryRandom/> : <GalleryGroup/>}
      </main>
  );
}

export default App;

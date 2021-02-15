import React from 'react';
import { Header } from '../../components/header'
import { ContentWrapper } from '../../components/contentWrapper';
import { InputName } from '../../components/inputName';

import './style.css'

const LandingPage = () => {
  return (
    <div className='container'>
      <Header title='Who is that pokemon?' />
      <ContentWrapper>
        <InputName />
      </ContentWrapper>
    </div>
  );
}

export { LandingPage };


import React from 'react';
import { Header } from '../../components/Header'
import { ContentWrapper } from '../../components/contentWrapper';
import { InputName } from '../../components/InputName';

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


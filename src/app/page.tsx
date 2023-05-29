'use client'

import React from 'react';
import styled from 'styled-components'
import Cabecalho from './components/Cabecalho/Cabecalho';
import Model1 from './components/model-1/Model1';
import Model2 from './components/model-2/Model2';

const MainPage = styled.section`

    display: grid;
    gap: 3.2rem;

    main{
        margin-left: 50.6rem;
    }

`

export default function page() {
  return (
    <MainPage>
        <header>
            <Cabecalho/>
        </header>
        <main>
            <Model1/>
            <Model2/>
        </main>
    </MainPage>
  )
}

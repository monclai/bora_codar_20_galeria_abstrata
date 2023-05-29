import { ArrowDownRight } from '@phosphor-icons/react';
import React from 'react'
import styled from 'styled-components';

const CabecalhoDesign = styled.header`
    position: fixed;
    max-width: 30rem;


h1{
    font-size: 4.8rem;
    line-height: 6rem;
    font-weight: 400;
    color: #fff;
}

svg{
    font-size: 3.2rem;
    display: block;
    margin-top: 3.2rem;
}
    
`

export default function Cabecalho() {
    return (
        <CabecalhoDesign>
            <h1>The — Abstract Gallery</h1>
            <ArrowDownRight size={32} color={"#fff"}/>
        </CabecalhoDesign>
    )
}

import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import Image5 from '../../../public/assets/img5.png'
import Image6 from '../../../public/assets/img6.png'
import Image7 from '../../../public/assets/img7.png'
import Image8 from '../../../public/assets/img8.png'

const ModelDesign = styled.div`

    display: grid;
    gap: 3.2rem;

    .container{
        position: relative;

        outline: .4rem solid transparent;
        transition: all .4s;
    }

    .container:nth-child(3){
        grid-column: 2;
        grid-row: 1/3;
    }

    .container:nth-child(3) img{
        aspect-ratio: 9/16;
    }

    .horizontal{
        grid-column: 1/3;
    }

    .horizontal img{
        aspect-ratio: 16/9;
    }

    span{
        font-size: 2rem;

        display: block;
        width: 100%;
        padding: 2.4rem;

        position: absolute;
        bottom: 0;

        background-image: linear-gradient(to bottom, transparent, #000 80%);

        visibility: hidden;
        opacity: 0;

        transition: all .4s;
    }

    .container:hover span{
        visibility: visible;
        opacity: 1;
    }

    .container:hover{
        outline: #fff;
    }

`

export default function Model2() {
    return (
        <ModelDesign>
            <div className="container">
                <Image src={Image5} alt="Abstract Name" fill={false} />
                <span>Abstract Name 5</span>
            </div>

            <div className="container">
                <Image src={Image6} alt="Abstract Name" fill={false} />
                <span>Abstract Name 6</span>
            </div>


            <div className="container">
                <Image src={Image7} alt="Abstract Name" fill={false} />
                <span>Abstract Name 7</span>
            </div>


            <div className="container horizontal">
                <Image src={Image8} alt="Abstract Name" fill={false} />
                <span>Abstract Name 8</span>
            </div>
        </ModelDesign>
    )
}

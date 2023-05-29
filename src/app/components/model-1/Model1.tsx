import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import Image1 from '../../../public/assets/img1.png'
import Image2 from '../../../public/assets/img2.png'
import Image3 from '../../../public/assets/img3.png'
import Image4 from '../../../public/assets/img4.png'



const ModelDesign = styled.div`
    display: grid;
    gap: 3.2rem;

    .container{
        position: relative;

        outline: .4rem solid transparent;
        transition: all .4s;
    }

    .container:nth-child(1){
        grid-row: 1/3;
    }

    .container:nth-child(1) img{
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


export default function Model1() {
    return (
        <ModelDesign>

            <div className="container">
                <Image src={Image1} alt="Abstract Name" fill={false} />
                <span>Abstract Name 1</span>
            </div>

            <div className="container">
                <Image src={Image2} alt="Abstract Name" fill={false} />
                <span>Abstract Name 2</span>
            </div>


            <div className="container">
                <Image src={Image3} alt="Abstract Name" fill={false} />
                <span>Abstract Name 3</span>
            </div>


            <div className="container horizontal">
                <Image src={Image4} alt="Abstract Name" fill={false} />
                <span>Abstract Name 4</span>
            </div>


        </ModelDesign>
    )
}

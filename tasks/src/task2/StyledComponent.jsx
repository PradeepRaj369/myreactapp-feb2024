import imge1 from './images/dhoni.jpg';
import imge2 from './images/virat.jpg';
import imge3 from './images/abd.jpg'
import React from 'react';
import styled from 'styled-components';
const Div1=styled.div`
display:flex;
`
const DivChild1=styled.div`
width:350px;
height:300px;
border-radius:10px;
text-align:center;
padding:10px;
margin:20px;
background-color:lightgrey;
line-height:40px;
`
const ImageCard=styled.img`

width:250px;
height:150px
`
const BtnCard=styled.button`
padding:8px;
border:none;
border-radius:5px;
color:white;
background-color:Blue;
font-size:12px;
font-weight:700;
`

const P=styled.p`
font-weight:700;
font-style:12px;
`
class StyleComponent extends React.Component{
    render(){
        return(
            <>
            <Div1 >
            <DivChild1>
                <ImageCard src={imge1} alt="fur" />
                <P>Furniture</P>
                <p>Price:3500</p>
                <BtnCard>Add ToCart</BtnCard>
            </DivChild1>

            <DivChild1>
                <ImageCard src={imge2} alt="mobile" />
                <P>Mobile</P>
                <p>Price:4000</p>
                <BtnCard>Add ToCart</BtnCard>
            </DivChild1>
            <DivChild1>
            <ImageCard src={imge3} alt="Head" />
                <P>Headset</P>
                <p>price:9000</p>
                <BtnCard>Add ToCart</BtnCard>
            </DivChild1>
            </Div1>
            </>
        )
    }
}
export default StyleComponent;
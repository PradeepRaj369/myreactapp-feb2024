import React from "react";
import styled from "styled-components";

const IMAGE=styled.img`
    width:100px;
    height:100px;
    border-radius:50%;
`
const CardImg=styled.div`
    border:2px solid #e6f2ff;
    padding:20px;
    width:20%;
    text-align:center;
    line-height: 45px;
    margin:20px;
    border-radius:10px;
    background-color: #e6f2ff;

`
class Card extends React.Component{
render(){
    return(
        <>
        <CardImg>
            <IMAGE src={this.props.imgs} alt="" />
            <p>Name :{this.props.name}</p>
            <p>Email :{this.props.gmail}</p>
        </CardImg>    
        </>
    );
}
}
export default Card;
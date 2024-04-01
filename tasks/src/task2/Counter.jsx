import React from "react";
import styled from "styled-components";

const H2=styled.h2`
color: red;
`
const CounterBox=styled.div`
    display:flex;
    padding:20px;
    gap:20px;
    border: 2px solid skublue;
    border-radius:20px;
    width:200px;
    margin:20px;
    background-color:skyblue;
`
const CountButtons=styled.button`
    width:50px;
    height:30px;
    border-radius:10px;
    background-color:${(props)=>(props.red && 'red')|| "green"};
    border:none;
    cursor:pointer;
`
const LABEL=styled.label`
    width:10px;
    font-weight:bold;
    margin:5px;
`
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    increment = () => {
    this.setState({
        count:this.state.count+this.props.incre
    })
    }
    decrement = () => {
        if(this.state.count>0){
            this.setState({
            count:this.state.count-this.props.incre
        })
        }
    
    }
    render(){
        return(
            <>
                <CounterBox>
                    <CountButtons red onClick={()=>this.decrement()}>{this.props.incre}</CountButtons>
                    <LABEL>{this.state.count}</LABEL>
                    <CountButtons onClick={()=>this.increment()}>{this.props.incre}</CountButtons>
                </CounterBox>
            </>
        )
    }
}
export default Counter;
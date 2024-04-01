import React from "react";
import styled from "styled-components";

const Container=styled.div`
    display:flex;
`
const CounterBox=styled.div`
    display:flex;
    padding:20px;
    gap:20px;
    border: 2px solid skublue;
    border-radius:20px;
    width:500px;
    margin:20px;
    background-color:skyblue;
    align-items:center;
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
    width:20px;
    font-weight:bold;
    margin:5px;`
class Temp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            f:0
        }
        this.state={
            c:0
        }
    }
    toFahrenheit = () => {
            this.setState({
                f:(this.props.C*9/5)+32
        })
    
    }
    toCelsious=()=>{
        this.setState({
            c:5/9*(this.props.F-32)
        })
    }
    render(){
        return(
            <>
            <Container>
            <CounterBox>
                    <label>Celsious:</label>
                    <CountButtons red onClick={()=>this.toFahrenheit()}>{this.props.C}</CountButtons>
                    <label>Fahrenheit:</label>
                    <LABEL>{this.state.f}°F</LABEL>
                </CounterBox>
                <CounterBox>
                <label>Fahrenheit:</label>
                <CountButtons red onClick={()=>this.toCelsious()}>{this.props.F}</CountButtons>
                <label>Celsious:</label>
                    <LABEL>{this.state.c}°C</LABEL>
            </CounterBox>
            </Container>
                
            </>
        )
    }
}
export default Temp;
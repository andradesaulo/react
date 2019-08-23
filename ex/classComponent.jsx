import React, { Component } from 'react'
export default class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {a: props.a,
                      b: props.b,
                      resultado: props.resultado,
                      sinal: props.sinal}
        this.handleChangeA = this.handleChangeA.bind(this)
        this.handleChangeB = this.handleChangeB.bind(this)
    }

    handleChangeA(event){
        this.setState(
            {a: event.target.value}
        )
    }
    handleChangeB(event){
        this.setState(
            {b: event.target.value}
        )
    }
    opera(x){
        if(x == "+"){
            this.setState(
                    {resultado: Number(this.state.a) + Number(this.state.b),
                     sinal: "+"}
            )
        }
        else if(x == "-"){
            this.setState(
                    {resultado: Number(this.state.a) - Number(this.state.b),
                    sinal: "-"}
            )
        }
        else if(x == "*"){
            this.setState(
                    {resultado: Number(this.state.a) * Number(this.state.b),
                    sinal: "*"}
            )
        }
        else{
            this.setState(
                    {resultado: Number(this.state.a) / Number(this.state.b),
                    sinal: "/"}
            )
        }
    }
    
    render() {
        return(
            <div>
                <h1> {this.props.label}</h1>
                <h2> <input onChange={this.handleChangeA} value={this.state.a}/></h2>
                <h2> {this.state.sinal}</h2>
                <h2> <input onChange={this.handleChangeB} value={this.state.b}/></h2>
                <h2> {this.state.resultado} </h2>
                <h3><button onClick={ () => this.opera("+")}>
                         + </button></h3>
                <h3><button onClick={ () => this.opera("-")}>
                         - </button></h3>
                <h3><button onClick={ () => this.opera("*")}>
                * </button></h3>
                <h3><button onClick={ () => this.opera("/")}>
                         / </button></h3>                
            </div>
        )
    }
}
// import React from 'react'
// import ReactDOM from 'react-dom'
// // import FamiliaSilva from './FamiliaSilva'
// import Familia from './familia'
// import Member from './member'
// ReactDOM.render(
//                 <Familia sobrenome='Silva'>
//                         <Member nome='Guilherme'/>
//                         <Member nome='Pedro'/>
//                         <Member nome='Luis'/>
//                 </Familia>,
//          document.getElementById('app'))
import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
ReactDOM.render(
        <ClassComponent label="Calculadora" a={0} b={0} resultado="" sinal=""/>
        , document.getElementById('app'))
import React from 'react';
import style from './Botao.module.scss'
// <{obj props name:type}>
class Botao extends React.Component{
  render() {

    // const colorButom = 'red'

    // const styles = {
      
    //   backgroundColor: 'green'
    // }

    return (
      <button className={style.botao}>
        {this.props.children} 
      </button>
    )
  }
}

export default Botao;
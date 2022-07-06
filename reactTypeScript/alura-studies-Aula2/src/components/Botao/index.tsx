import React from 'react';
import style from './Botao.module.scss'
// <{obj props name:type}>
class Botao extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined  // ? is optional
}>{
  render() {

    // const colorButom = 'red'

    // const styles = {
      
    //   backgroundColor: 'green'
    // }
    const {type = "button" } = this.props
    return (
      <button type={type} className={style.botao}>
        {this.props.children} 
      </button>
    )
  }
}

export default Botao;
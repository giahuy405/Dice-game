import React, { Component } from 'react'
import style from "./Home.module.css";
import { connect } from "react-redux"
class XucXac extends Component {
  render() {
    return (
      <div className={`mt-4 ${style.xucsac}`}>
        
        {this.props.mangXucXac.map(item=>
           <img key={item.id} width={60} src={item.img} alt="" />
          )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mangXucXac: state.XucXacReducer.mangXucXac,

  }
}
export default connect(mapStateToProps)(XucXac)
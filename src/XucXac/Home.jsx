import React, { Component } from 'react'
import style from "./Home.module.css"
import InfoGame from './InfoGame'
import XucXac from './XucXac'
import { connect } from "react-redux";
import Modal from './Modal';

class Home extends Component {



  render() {
    const { dispatch } = this.props;
    return (
      <div className={style.background}
        style={{ backgroundImage: "url(./img/bgGame.png)" }}
      >
        <div className={style.container}>
          <h1 className={style.title}>Game Xúc Xắc</h1>
          <div className={style.row}>
            <div className={style.col}>
              <button
                onClick={() => dispatch({
                  type: "BET",
                  payload: false
                })}
                className={style.buttonGame}>Xỉu</button>
            </div>
            <div className={style.col}>
              {this.props.render ? <XucXac /> :
                <div className="spinner-grow mt-5" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              }
            </div>
            <div className={style.col}>
              <button
                onClick={() => dispatch({
                  type: "BET",
                  payload: true,
                })}
                className={style.buttonGame}>Tài</button>
            </div>
          </div>
          <InfoGame />
        </div>
        <Modal />
        <button
          data-bs-toggle="modal" data-bs-target="#exampleModal"
          className={`btn btn-secondary rounded-circle  ${style.btnModal}`}>?</button>
      </div>
    )
  }
}
const MSTP = state => {
  return {
    render: state.XucXacReducer.render,
  }
}
export default connect(MSTP)(Home);
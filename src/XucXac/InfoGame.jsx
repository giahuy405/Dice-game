import React, { Component } from 'react'
import { connect } from "react-redux"
import style from "./Home.module.css"

import Swal from 'sweetalert2'
class InfoGame extends Component {
  showAlert = () => {
    
    Swal.fire({
      title: 'ĐANG TUNG XÚC XẮC',
      html: 'Chờ đi bạn ơi',
      timer: 1700,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    })
    this.setState({
      render:true
    })
    setTimeout(() => {
      this.props.dispatch({
        type: "PLAY"
      })
    }, 2100);

  }

  render() {
    const { taiXiu, gameWin, totalGamePlay, dispatch } = this.props;
    return (
      <div className={`text-center mt-5 ${style.blockInfo}`}>
        <h1>BẠN CHỌN : <span className='text-danger'>{taiXiu ? "TÀI" : "XỈU"}</span></h1>
        <h1>BÀN THẮNG : <span className='text-success'>{gameWin}</span></h1>
        <h1>TỔNG SỐ BÀN CHƠI : <span className='text-primary'>{totalGamePlay}</span></h1>
        <button
          onClick={this.showAlert}
          className='btn btn-success'>
          Play game
        </button>
      </div>
    )
  }
}
const MSTP = state => {
  return {
    gameWin: state.XucXacReducer.gameWin,
    taiXiu: state.XucXacReducer.taiXiu,
    totalGamePlay: state.XucXacReducer.totalGamePlay,

  }
}
export default connect(MSTP)(InfoGame)
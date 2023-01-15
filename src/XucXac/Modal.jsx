import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLabel">Luật chơi </h3>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                               <h5 style={{fontFamily:"sans-serif"}}>
                               Tổng số xúc xắc trên 12 là TÀI,
                                nhỏ hơn 12 là XỈU.
                                <br />
                                Dựa vào đó bạn chọn Tài hoặc Xỉu.
                                <br />
                                 Nếu bạn chọn đúng thì bạn thắng, và ngược lại
                               </h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

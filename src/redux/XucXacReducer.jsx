
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import Swal from 'sweetalert2';

const initialState = {
    taiXiu: true, // true là tài (3->11), false là xỉu ( 12 trở lên)
    mangXucXac: [
        { number: 1, img: './img/1.png', id: 1 },
        { number: 1, img: './img/1.png', id: 2 },
        { number: 1, img: './img/1.png', id: 3 }
    ],
    gameWin: 0,
    totalGamePlay: 0,
    render: true

}
export const XucXacReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "BET": {
            state.taiXiu = payload
            return { ...state };
        }
        case "PLAY": {
            let newListXX = [];
            for (let i = 1; i < 4; i++) {
                let newNumber = Math.floor(Math.random() * 6) + 1;
                let newXX = { number: newNumber, img: `./img/${newNumber}.png`, id: i };
                newListXX.push(newXX);
            }
            state.mangXucXac = newListXX;

            state.totalGamePlay++;
            let a = newListXX.reduce((pre, curr) => {
                return pre + curr.number;
            }, 0)
            // win game
            if (a < 12 && state.taiXiu || a > 11 && !state.taiXiu){
                state.gameWin++;
                Swal.fire({
                    title: 'Congratulation! <br> You win!!!',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("https://sweetalert2.github.io/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `,
                    timer:2000
                  })              
            }
            // lose game
            else{
                if (a < 12 && !state.taiXiu || a > 11 && state.taiXiu){
                    Swal.fire({
                        title: 'You lose 🥲 ',
                        width: 600,
                        padding: '3em',
                        color: '#716add',
                        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                        backdrop: `
                          rgba(160,0,0,0.4)
                          url("https://sweetalert2.github.io/images/nyan-cat.gif")
                          left top
                          no-repeat
                        `,
                        timer:2000
                      })              
                }
            }
                return { ...state }
        }
        default:
            return state;
    }
}
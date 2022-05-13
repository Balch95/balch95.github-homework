import React, { Component } from 'react';
import './Counter.css';


class Counter extends Component {
    render(){

        let randomNumber  = Math.floor(Math.random() * (108-1+1) +1 );

        return(
            <div className='counter'>
            Counter:
                <span className='value'>
                    {randomNumber}
                </span>
            </div>
        );
    };
};

// function Counter(props){

    // let randomNumber  = Math.floor(Math.random() * (108-1+1) +1 );
//     return (
//         <div className='counter'>
//             Counter:
//             <span className='value'>
//                 {randomNumber}
//             </span>
//         </div>
//     );
// }

export default Counter;
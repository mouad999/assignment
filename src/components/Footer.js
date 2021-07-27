import React from 'react';
import {useState} from 'react';
import './Footer.css';

export default function Footer(props) {
    
    const [currencys, setCurrencys] = useState([
    {currname:"BTC",price:49.158},
    {currname:"ETH",price:3.927},
    {currname:"ADA",price:345.27},
    {currname:"DOGE",price:54.7},
    {currname:"XRP",price:6.339}
                      ]);
    
    return (
        <div className='footer'>
            {
                currencys.map(item=>
                    <div className={item.currname} style={props.curr === item.currname?{backgroundColor:'#F2F5FD'}:null}>
                        <p>{item.currname}</p>
                        <p id='prc' style={props.curr === item.currname?{color:'#00BC8B'}:null}>{item.price}$</p>
                    </div>
                )
            }
    
        </div>
    )
}

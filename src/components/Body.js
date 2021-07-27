import React from 'react';
import {useState} from 'react';
import './Body.css';
import { BiBell } from 'react-icons/bi';
import { Button } from 'bootstrap';
import Footer from './Footer';
export default function Body() {
    const [curren, setCurren] = useState("");
    const currhandler = (e)=>{
        setCurren(e.target.value);
    }
    return (
        <>
        <div className='body'>
            <div className='para'>
                <text>Get notified when a coin goes above or below a price target.</text>
            </div>
            <div className='instr1'>
                <label>Send me an email </label>
                <input placeholder='Email'/>
                <label>as soon as</label>
            </div>
            <div className='instr2'>
                <input list='coins' id='list' onChange={currhandler}/>
                <datalist id='coins'>
                    <option value="BTC"/>
                    <option value="ETH"/>
                    <option value="ADA"/>
                    <option value="DOGE"/>
                    <option value="XRP"/>
                </datalist>
                <label>goes</label>
                <input list='ab-bl' id='chmp1'/>
                <datalist id='ab-bl'>
                    <option value="Above"/>
                    <option value="Below"/>
                </datalist>
                <label>the price of</label>
                <input type="text" placeholder='$' id='chmp2' />
            </div>
            <button>
            <BiBell style={{color:'white'}}/>
             Set Alert
            </button>
            <div className='img'>
            <img src={require('./sketch1.png').default}/>
        </div>
        </div>
        
        <Footer curr={curren}/>
        </>
    )
}

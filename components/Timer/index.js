import styles from '../../styles/Timer.module.css'
import React, {useEffect, useRef, useState} from "react";
import {Chip, Star, Time} from "../icons";


export default function Timer() {
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(14);
    const [zeroSec, setZeroSec] = useState('');
    const [zeroMin, setZeroMin] = useState('');
    const [isActive, setIsActive] = useState(true);
    let rtt = ' : ';

    useEffect(() => {
        let interval = null;


        if (isActive && minutes> -1 && minutes !== '') {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && minutes > -1) {
            clearInterval(interval);
        }

        if (seconds === 0) {
            setSeconds(59);
            setMinutes(minutes => minutes - 1);
        }
        if (minutes === 0) {

            setMinutes(0);
        }

        if (minutes === 0 && seconds === 0){
            setMinutes('');
            setSeconds('');
        }


        if (seconds < 10) {
            setZeroSec(0);
        } else {
            setZeroSec('');
        }

        if (minutes < 10) {
            setZeroMin(0);
        } else {
            setZeroMin('');
        }

        if (minutes === '' && seconds === ''){
            setZeroSec('00');
            setZeroMin('00');
        }
        return () => clearInterval(interval);


    }, [isActive, seconds]);

    return (
        <div>
            <div className={styles.form_timer}>
                <div className={styles.form_timer_head}>
                    <div className={styles.text_top}> <Time/> <div className={styles.space}/> Оставшиеся время</div>
                </div>
                <div className={styles.form_bottom}>


                    <div className={styles.form_timer_bottom}/>
                    <div className={styles.time}>
                        <h1 className="text-white">{zeroMin}{minutes}{rtt}{zeroSec}{seconds}</h1>
                        <div className={styles.stats}>
                                <p className={styles.text_stats}>687</p><Chip/>
                                <div className={styles.space}/>
                                <p className={styles.text_stats}>930</p><Star/>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    )
}
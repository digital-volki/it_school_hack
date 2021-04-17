import styles from './fastgame.module.scss'
import clsx from "clsx";
import {useState} from 'react'
import {FastGameSolo} from './fastGameSolo'

export const FastGame = ({active, setActive}) =>{
  const [type, setType] = useState(true);

    return(
      <div className={!active ? styles.fastGame : styles.fastactive} onClick = {()=> setActive(false)} >
        <div className={styles.fastGameContent} onClick={e => e.stopPropagation()}>
          <div className={styles.all}>
            <div className={clsx(styles['playerText'])}>
              <p>Все игры</p>
              <img alt="shit" src={'./exit.svg'} className={clsx(styles['playerImg'])} onClick = {()=> setActive(false)}/>
            </div>
          </div>
          <div className={styles.allButton}>
            <button onClick={() => setType(true)} className={clsx(styles['button'], type === true && styles['buttonActive'])} >одиночные</button>
            <button onClick={() => setType(false)} className={clsx(styles['button'], type === false  && styles['buttonActive'])}  >командные</button>
          </div>
          {type ?
            <FastGameSolo/> : ""
          }
        </div>
      </div>
    )
}

import {useState} from 'react';
import styles from './battle.module.scss'
import clsx from "clsx";
import {GamersComponent} from './gamers'

export default function BattleArena (){
  const [type, setType] = useState(0);


  return(
    <>
      <div className={styles.batteleArena}>
        <div className={styles.logoArena}>
          <img alt="trap" src={'./trap.svg'} className={styles.logoImg}/>
          <p className={styles.logoText}>Арена Битв</p>
        </div>
          <div className={styles.panel}>
            <button onClick={() => setType(0)} className={clsx(styles['button'], type === 0 && styles['buttonActive'])} >все игроки</button>
            <button onClick={() => setType(1)} className={clsx(styles['button'], type === 1  && styles['buttonActive'])}  >Подписчики</button>
            <button onClick={() => setType(2)} className={clsx(styles['button'], type === 2 && styles['buttonActive'])}  >Подписка</button>
          <GamersComponent type={type}/>
            <div className={clsx(styles['par'], type === 0 && styles['p'])}>
              <p className={clsx(styles['parText'])}>{type}</p>
            </div>
        </div>
      </div>

    </>
  )
}

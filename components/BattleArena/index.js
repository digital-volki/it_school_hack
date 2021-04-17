import styles from './battle.module.scss'
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function BattleArena (){

  const [state, setClicked] = useState({
    clicked: false
  })

  useEffect(() => {
    clicked: true
  });

  return(
    <>
      <div className={styles.batteleArena}>
        <div className={styles.logoArena}>
          <img alt="trap" src={'./trap.svg'} className={styles.logoImg}/>
          <p className={styles.logoText}>Арена Битв</p>
        </div>
        <div className={styles.panel}>
          <button className={clsx(styles['button'])}>все игроки</button>
          <button className={clsx(state.clicked ? styles['button'] : styles['buttonActive'])}>Подписчики</button>
          <button className={clsx(styles['button'])}>Подписка</button>
        </div>
      </div>

    </>
  )
}

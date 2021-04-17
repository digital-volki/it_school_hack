import styles from './plch.module.scss'
import clsx from "clsx";
import Link from 'next/link'
import PlayerComponent from './player'
import BatteleArena from '../BattleArena'
import HistoryMatch from '../HistoryMatch'


export default function playerChallenge ({children}){
  return(
    <>
    <div className={styles.all}>
      <div className={styles.allHeith}>
        <div className={clsx(styles['playerChallenge'])}>
          <div className={clsx(styles['playerChallengeHeader'])}>
          <div className={clsx(styles['playerText'])}>
            <p>Вызовы игроков</p>
            <img alt="shit" src={'./bx-shield-quarter.svg'} />
          </div>
            <PlayerComponent />
          </div>

        </div>
        <BatteleArena/>

        <div className={clsx(styles['playerChallenge'])}>
          <div className={clsx(styles['playerChallengeHeader'])}>
          <div className={clsx(styles['playerText'])}>
            <p>Вызовы игроков</p>
            <img alt="shit" src={'./bx-shield-quarter.svg'} />
          </div>
            <PlayerComponent />
          </div>

        </div>
        </div>
        <HistoryMatch/>

      </div>
      <main>
        {children}
      </main>
    </>
  )
}

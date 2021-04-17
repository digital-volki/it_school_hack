import styles from './hismatch.module.scss'
import clsx from "clsx";
import ResultMatch from "./result"
import TransComponent from '../transition/trans'

export default function hismatch (){
  return(
    <>
      <div className={styles.history}>
        <div className={styles.historyHeader}>
          <div className={clsx(styles['historyText'])}>
            <p className={clsx(styles['Text'])}>История игр</p>
            <img alt="clock" src={'./clock.svg'}/>
          </div>
        </div>
          <div className={styles.title}>
            <p>Победитель</p>
            <p>Проигравший</p>
            <p>Счет</p>
            <p>Награда</p>
            <p>Время</p>
          </div>
          <div className={styles.titileandbutton}>
            <ResultMatch/>
            <TransComponent/>
        </div>
      </div>
    </>
  )
}

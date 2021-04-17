import styles from './battle.module.scss'
import clsx from "clsx";
import Link from 'next/link'

export const GamersComponent = ({ type }) =>{
  return(
    <>
      <div className={clsx(styles['playerComponent'])}>
        <div className={clsx(styles['dateAcc'])}>
          <img alt='vladphoto' src={'./vlad.png'} className={clsx(styles['avatar'])}/>

            <p className={clsx(styles['Info2'])}>Влад Шкердин</p>

          <div className={clsx(styles['allTRan'])}>
            <img alt='transistor' src={'/transistor.svg'} className={clsx(styles['chipimg'])}/>
            <p className={clsx(styles['Transistor'])}>Транзистор</p>
          </div>
          <div className={clsx(styles['dateAcc1'])}>
            <p className={clsx(styles['Info'])}>300</p>
            <img alt='chip' src={'/bx-chip.svg'} className={clsx(styles['chipimg'])}/>
            <p className={clsx(styles['Info'])}>300</p>
            <img alt='chip' src={'/bx-star.svg'} className={clsx(styles['chipimg'])}/>

          </div>
          <div className={clsx(styles['paralle'])}>
            <img alt='question' src={'/right.svg'}  className={clsx(styles['question'])}/>
          </div>
        </div>
      </div>
    </>
  )
}

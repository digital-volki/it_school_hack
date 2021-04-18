import styles from './battle.module.scss'
import clsx from "clsx";
import Link from 'next/link'
import {leagues} from "../../lib/consts";

export const GamersComponent = ({ username, league, balance, experience }) =>{
  return(
    <>
      <div className={clsx(styles['playerComponent'])}>
        <div className={clsx(styles['dateAcc'])}>
          <img alt='vladphoto' src={'./vlad.png'} className={clsx(styles['avatar'])}/>

            <p className={clsx(styles['Info2'])}>{username}</p>

          <div className={clsx(styles['allTRan'])}>
            <img alt='transistor' src={'/transistor.svg'} className={clsx(styles['chipimg'])}/>
            <p className={clsx(styles['Transistor'])}>{leagues[league]}</p>
          </div>
          <div className={clsx(styles['dateAcc1'])}>
            <p className={clsx(styles['Info'])}>{balance}</p>
            <img alt='chip' src={'/bx-chip.svg'} className={clsx(styles['chipimg'])}/>
            <p className={clsx(styles['Info'])}>{experience}</p>
            <img alt='chip' src={'/bx-star.svg'} className={clsx(styles['chipimg'])}/>

          </div>
          <Link href='/'>
          <a>
            <div className={clsx(styles['paralle'])}>
              <img alt='question' src={'/right.svg'}  className={clsx(styles['question'])}/>
            </div>
          </a>
          </Link>
        </div>
      </div>
    </>
  )
}

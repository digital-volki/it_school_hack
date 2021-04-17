import styles from './plch.module.scss'
import clsx from "clsx";
import Link from 'next/link'

export const PlayerComponent = ({type}) => {
  return(
    <Link href={'/battle'}>
      <div className={clsx(styles['playerComponent'])}>
        <div className={clsx(styles['dateAcc'])}>
          <img alt='vladphoto' src={'./vlad.png'} className={clsx(styles['avatar'])}/>
          <div className={clsx(styles['InfoPlayer'])}>
            <p className={clsx(styles['Info'])}>влад ш.</p>
            <p className={clsx(styles['Info1'])}>2 дня</p>
          </div>
          <div className={clsx(styles['dateAcc1'])}>
            <p className={clsx(styles['Info'])}>300</p>
            <img alt='chip' src={'/bx-chip.svg'} className={clsx(styles['chipimg'])}/>
            <p className={clsx(styles['Info'])}>300</p>
            <img alt='chip' src={'/bx-star.svg'} className={clsx(styles['chipimg'])}/>

          </div>
          {type ?
            <div className={clsx(styles['paralle'])}>
              <img alt='question' src={'/right.svg'}  className={clsx(styles['question'])}/>
            </div> : <p className={clsx(styles['chet'])}>3:2</p>
          }

        </div>
      </div>
    </Link>
  )
}

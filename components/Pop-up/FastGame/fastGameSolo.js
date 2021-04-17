import styles from './fastgame.module.scss'
import clsx from "clsx";
import {useState} from 'react'
import Link from 'next/link'

export const FastGameSolo = () => {
  return(
    <>
      <div className={styles.fastGame1}>
        <div className={styles.fastGame1Header}>
          <div className={clsx(styles['fastStart'])}>
            <img alt='faststart' src={'/bx-white.svg'}/>
            <p className={clsx(styles['textFastStart'])}>Быстрые тесты</p>
          </div>
          <div className={clsx(styles['dateAcc1'])}>
            <p className={clsx(styles['Info'])}>300</p>
            <img alt='chip' src={'/bx-chip.svg'} className={clsx(styles['chipimg'])}/>
            <p className={clsx(styles['Info'])}>250</p>
            <img alt='chip' src={'/bx-star.svg'} className={clsx(styles['chipimg'])}/>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.description1}>
              <p className={styles.Time}>Время</p>
              <p className={styles.TimeNum}>15:00</p>
          </div>
          <div className={styles.description1}>
            <p className={styles.Time}>min ранг</p>
            <p className={styles.TimeNum}>Транзистор</p>
          </div>
          <div className={styles.description1}>
            <p className={styles.Time}>Вопросы</p>
            <p className={styles.TimeNum}>Тестовые</p>
          </div>
          <div className={styles.description1}>
            <p className={styles.Time}>Количесвто заданий</p>
            <p className={styles.TimeNum}>5</p>
          </div>
        </div>
        <Link href='/battle'>
          <button className={clsx(styles['button1'])} >Выбрано</button>
        </Link>
      </div>

      <div className={styles.fastGame1}>
        <div className={styles.fastGame1Header}>
          <div className={clsx(styles['fastStart'])}>
            <img alt='faststart' src={'/bx-white.svg'}/>
            <p className={clsx(styles['textFastStart'])}>Быстрые тесты</p>
          </div>
          <div className={clsx(styles['dateAcc1'])}>
            <p className={clsx(styles['Info'])}>300</p>
            <img alt='chip' src={'/bx-chip.svg'} className={clsx(styles['chipimg'])}/>
            <p className={clsx(styles['Info'])}>250</p>
            <img alt='chip' src={'/bx-star.svg'} className={clsx(styles['chipimg'])}/>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.description1}>
              <p className={styles.Time}>Время</p>
              <p className={styles.TimeNum}>15:00</p>
          </div>
          <div className={styles.description1}>
            <p className={styles.Time}>min ранг</p>
            <p className={styles.TimeNum}>Транзистор</p>
          </div>
          <div className={styles.description1}>
            <p className={styles.Time}>Вопросы</p>
            <p className={styles.TimeNum}>Тестовые</p>
          </div>
          <div className={styles.description1}>
            <p className={styles.Time}>Количесвто заданий</p>
            <p className={styles.TimeNum}>5</p>
          </div>
        </div>
        <Link href='/battle'>
          <button className={clsx(styles['button1'])} >Выбрано</button>
        </Link>
      </div>
    </>

  )
}

import styles from './header.module.scss'
import clsx from "clsx";
import Link from 'next/link'

export default function HeaderComponent ({children}){
  return(
    <>
    <div className={clsx(styles['Header'])}>

      <div className={clsx(styles['fastStart'])}>
        <img alt='faststart' src={'/bx-category.svg'}/>
        <p className={clsx(styles['textFastStart'])}>Быстрые тесты</p>
        <img alt='vector' src={'/vector.svg'}/>
        <img alt='faststart' src={'/logo.svg'} className={clsx(styles['comand'])}/>
        <p className={clsx(styles['textFastStart'])}>Команда</p>
        <img alt='vector' src={'/vector.svg'}/>
      </div>
      <div className={clsx(styles['fastStart'])}>
        <img alt='faststart' src={'/bx-category.svg'}/>
        <p className={clsx(styles['textFastStart'])}>Быстрые тесты</p>
        <img alt='vector' src={'/vector.svg'}/>
        <img alt='faststart' src={'/logo.svg'} className={clsx(styles['comand'])}/>
        <p className={clsx(styles['textFastStart'])}>Команда</p>
        <img alt='vector' src={'/vector.svg'}/>
      </div>

      </div>
    <main>{children}</main>
    </>
  )
}

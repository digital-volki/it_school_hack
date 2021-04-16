import styles from './panel.module.scss'
import Link from 'next/link'
import clsx from "clsx";


export default function SidePanel ({children}){
  return(
    <>
      <div className={clsx(styles['SidePanel'])}>
        <Link href='/'>
          <img alt="logo" src={'./Subtract.svg'} className={clsx(styles['logo'])}/>
        </Link>
        <Link href='/'>
          <div className={clsx(styles['par'])}></div>
        </Link>
        <Link href='/'>
          <div className={clsx(styles['par'])}></div>
        </Link>
        <Link href='/'>
          <div className={clsx(styles['par'])}></div>
        </Link>
        <Link href='/'>
          <div className={clsx(styles['par'])}></div>
        </Link>
        <Link href='/'>
          <div className={clsx(styles['par'])}></div>
        </Link>
        <Link href='/'>
          <div className={clsx(styles['par'])}></div>
        </Link>
      </div>
      <main>
        {children}
      </main>
    </>
  )
}

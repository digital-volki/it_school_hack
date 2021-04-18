import styles from './panel.module.scss'
import Link from 'next/link'
import clsx from "clsx";
import { useRouter } from "next/router";

export default function SidePanel ({children}){

  const {pathname, push} = useRouter();
  return(
    <>
      <div className={clsx(styles['SidePanel'])}>
        <Link href='/'>
          <a>
            <img alt="logo" src={'./Subtract.svg'} className={clsx(styles['logo'])}/>
          </a>
        </Link>
        <Link href='/' >
          <a>
            <div className={clsx(styles['par'], pathname === '/' && styles['p'])}>
              <img alt='game' src={'./bx-game.svg'} className={clsx(styles['barImag'])}/>
            </div>
          </a>
        </Link>
        <Link href='/shop'>
          <a>
            <div className={clsx(styles['par'], pathname === '/shop' && styles['p'])}>
              <img alt='game' src={'./bx-shopping-bag.svg'} className={clsx(styles['barImag'])}/>
            </div>
          </a>
        </Link>
        <Link href='/rating'>
          <a>
           <div className={clsx(styles['par'], pathname === '/2' && styles['p'])}>
            <img alt='game' src={'./bx-bar-chart-alt-2.svg'} className={clsx(styles['barImag'])}/>
           </div>
          </a>
        </Link>
        <Link href='/leags'>
          <a>
            <div className={clsx(styles['par'], pathname === '/3' && styles['p'])}>
              <img alt='game' src={'./bx-trophy.svg'} className={clsx(styles['barImag'])}/>
            </div>
          </a>
        </Link>
        <Link href='/followers'>
          <a>
             <div className={clsx(styles['par'], pathname === '/followers' && styles['p'])}>
              <img alt='game' src={'./bx-group.svg'} className={clsx(styles['barImag'])}/>
             </div>
          </a>
        </Link>
        <Link href='/diary'>
          <a>
             <div className={clsx(styles['par'], pathname === '/diary' && styles['p'])}>
              <img alt='game' src={'./bx-alarm.svg'} className={clsx(styles['barImag'])}/>
             </div>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <div className={clsx(styles['par'], pathname === '/5' && styles['p'])}>
              <img alt='game' src={'./bx-help-circle.svg'} className={clsx(styles['barImag'])}/>
            </div>
          </a>
        </Link>
      </div>
      <main>
        {children}
      </main>
    </>
  )
}

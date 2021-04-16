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
        <img alt='vector' src={'/vector.svg'} className={clsx(styles['vec'])}/>
        <img alt='faststart' src={'/logo.svg'} className={clsx(styles['comand'])}/>
        <p className={clsx(styles['textFastStart'])}>Команда</p>
        <img alt='vector' src={'/vector.svg'} className={clsx(styles['vec'])}/>
      </div>
        <div className={clsx(styles['fastStart'])}>
          <div className={clsx(styles['parallelogram'])}>
            <p className={clsx(styles['textPara'])}>баланс</p>
            <div className={clsx(styles['chip'])}>
              <p className={clsx(styles['textNumber'])}>43535</p>
              <img alt='chip' src={'/bx-chip.svg'} className={clsx(styles['chipimg'])}/>
              <div className={clsx(styles['paralle'])}>
                <img alt='question' src={'/bx-question-mark.svg'}  className={clsx(styles['question'])}/>
              </div>
            </div>
          </div>
          <div className={clsx(styles['parallelogram'])}>
            <p className={clsx(styles['textPara'])}>енергия</p>
            <div className={clsx(styles['chip'])}>
              <p className={clsx(styles['textNumber'])}>10/10</p>
              <img alt='chip' src={'/bx-en.svg'} className={clsx(styles['chipimg'])}/>
              <div className={clsx(styles['paralle'])}>
                <img alt='question' src={'/bx-question-mark.svg'}  className={clsx(styles['question'])}/>
              </div>
            </div>
          </div>
          <div>
            <img alt='photo' src={'/MaskGroup.png'} className={clsx(styles['photo'])}/>
            <img alt='photo' src={'/arrow-down.svg'} className={clsx(styles['photo'])}/>
          </div>
        </div>
      </div>
    <main>{children}</main>
    </>
  )
}

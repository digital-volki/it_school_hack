import styles from './hismatch.module.scss'
import clsx from "clsx";


export default function result (){
return(
  <>
  <div className={clsx(styles['playerComponent'])}>
    <div className={clsx(styles['dateAll'])}>
      <div className={clsx(styles['dateAcc2'])}>
        <div>
          <img alt='vladphoto' src={'./vlad.png'} className={clsx(styles['avatar'])}/>
        </div>
        <div>
          <p className={clsx(styles['Info2'])}>Влад Шкердин</p>
          <p className={clsx(styles['Info1'])}>Влад Шкердин</p>
        </div>
      </div>
      <div className={clsx(styles['dateAcc3'])}>
        <div>
          <img alt='vladphoto' src={'./vlad.png'} className={clsx(styles['avatar'])}/>
        </div>
        <div>
          <p className={clsx(styles['Info2'])}>Влад Шкердин</p>
          <p className={clsx(styles['Info1'])}>Влад Шкердин</p>
        </div>

      </div>
        <p className={clsx(styles['chet'])}>3:2</p>
      <div className={clsx(styles['dateAcc4'])}>
        <p className={clsx(styles['Info'])}>300</p>
        <img alt='chip' src={'/bx-chip.svg'} className={clsx(styles['chipimg'])}/>
        <p className={clsx(styles['Info'])}>300</p>
        <img alt='chip' src={'/bx-star.svg'} className={clsx(styles['chipimg'])}/>
      </div>
      <p className={clsx(styles['chet1'])}>16.04.2021 в 21:00</p>

    </div>
  </div>
  </>
)

}

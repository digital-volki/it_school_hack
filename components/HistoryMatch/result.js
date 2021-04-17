import styles from './hismatch.module.scss'
import clsx from "clsx";


export default function result (){
return(
  <>
  <div className={clsx(styles['playerComponent'])}>
    <div className={clsx(styles['dateAcc'])}>
      <img alt='vladphoto' src={'./vlad.png'} className={clsx(styles['avatar'])}/>
      <p className={clsx(styles['Info2'])}>Влад Шкердин</p>
    </div>
  </div>
  </>
)

}

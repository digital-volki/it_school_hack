import {useState} from 'react';
import styles from './trans.module.scss'
import clsx from "clsx";

export default function trans (){
const [type, setType] = useState(0);
return(
    <>

      <div className={clsx(styles['par'], type === 0 && styles['p'])}>
        <p className={clsx(styles['parText'])}>{type}</p>
      </div>
    </>
  )
}

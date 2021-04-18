import styles from './diary.module.scss'
import clsx from "clsx";
import Link from 'next/link'

export default function diary (){
  return(
    <>
    <div className={styles.diary}>
    <div className={styles.AllBlock}>
      <div className={styles.diaryTask}>
      <div className={styles.Header}>
        <div className={styles.da}>
            <div className={styles.diaryTaskQue}>
              <img alt='faststart' src={'/bx-white.svg'} className={styles.img}/>
              <p className={clsx(styles['textFastStart'])}>Быстрые тесты</p>
            </div>
            <p className={styles.proText}>33%</p>
          </div>
        </div>
        <ul className={styles.listQue} type="none">
          <li className={styles.listQue1}>
              <p className={styles.text}>1 вопрос</p>
              <img alt="ready" src={'/ready.svg'} className={styles.queImg}/>
          </li>
          <li className={styles.listQue2}>
            <p  className={styles.text}>2 вопрос</p>
          </li>
          <li className={styles.listQue1}>
            <p  className={styles.text}>3 вопрос</p>
          </li>
          <li className={styles.listQue1}>
            <p  className={styles.text}>4 вопрос</p>
          </li>
          <li className={styles.listQue1}>
            <p  className={styles.text}>5 вопрос</p>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.block2}>
          <div className={styles.infa}>
            <p className={styles.title}>Классификатор</p>
            <p className={styles.infaText}>Дано целое число N. Определите, к какой категории оно относится:</p>
            <ul className={styles.infaText}>
              <li> "DIGIT", если это однозначное неотрицательное целое число;</li>
              <li> "NUM", если это двузначное целое положительное число;</li>
              <li> "OTHER", если оно не относится к первым двум категориям.</li>
            </ul>
            <p className={styles.title}>Входные данные</p>
            <p className={styles.infaText}>Во входном потоке в единственной строке записано целое число N (−10≤N≤10)</p>
            <p className={styles.title}>Входные данные</p>
            <p className={styles.infaText}>Выведите название категории, к которой относится число N.</p>
            <p className={styles.title}>Пример</p>
            <table className={clsx('table table-bordered', styles['tableE'])}>
              <thead>
                <tr>
                  <th scope="col">Входные данные</th>
                  <th scope="col">Входные данные</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>DIGIT</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>NUM</td>
                </tr>
                <tr>
                  <td >6</td>
                  <td >OTHER</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.answerblock}>
          <div className={styles.sideNUmber}>
            <p className={styles.sieText}>1</p>
            <p className={styles.sieText}>2</p>
            <p className={styles.sieText}>3</p>
            <p className={styles.sieText}>4</p>
            <p className={styles.sieText}>5</p>
            <p className={styles.sieText}>6</p>
            <p className={styles.sieText}>7</p>

          </div>
        </div>
        <button className={styles.button}>к следующему шагу</button>
      </div>
        <div className={styles.diaryTask}>
        <div className={styles.Header1}>
          <div className={styles.da1}>
              <div className={styles.diaryTaskQue1}>
                <p className={clsx(styles['textFastStart'])}>награда</p>
              </div>
              <img alt='faststart' src={'/bxs-crown.svg'} className={styles.img}/>
            </div>
          </div>
          <div className={styles.sideText}>
            <p className={styles.sieText1}>Каждый день до 00:00 по МСК выполняй небольшие задания и зарабатывай чипы</p>
          </div>
          <img src={'img1.svg'} className={styles.imsge}/>
          <img src={'img2.svg'}  className={styles.imsg1}/>

        </div>
      </div>
    </div>
    </>
  )
}

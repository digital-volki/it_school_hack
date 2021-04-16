import styles from '../styles/Home.module.css'
import HeaderComponent from '../components/HeaderComponent/'
import SidePanel from '../components/Panel/'

export default function Home() {
  return (
    <div className={styles.container}>
      <SidePanel>
        <HeaderComponent/>
      </SidePanel>

    </div>
  )
}

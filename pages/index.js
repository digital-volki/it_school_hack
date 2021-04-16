import styles from '../styles/Home.module.css'
import HeaderComponent from '../components/HeaderComponent/'
import SideBar from '../components/SideBar/'

export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar>
        <HeaderComponent/>
      </SideBar>

    </div>
  )
}

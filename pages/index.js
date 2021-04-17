// import styles from '../styles/Home.module.css'
import HeaderComponent from '../components/HeaderComponent/'
import SideBar from '../components/SideBar/'
import PlayerChallenge from '../components/PlayerChallenge/'


export default function Home() {
  return (
    <div >
      <SideBar>
        <HeaderComponent/>
        <PlayerChallenge/>
      </SideBar>

    </div>
  )
}

// import styles from '../styles/Home.module.css'
import HeaderComponent from '../components/HeaderComponent/'
import SideBar from '../components/SideBar/'
import PlayerChallenge from '../components/PlayerChallenge/'
import {useState} from 'react'

export default function Home() {
  const [panel, setPanel] = useState(true)
  return (
    <div >
      <SideBar>
        <HeaderComponent panel={panel}/>
        <PlayerChallenge/>
      </SideBar>

    </div>
  )
}

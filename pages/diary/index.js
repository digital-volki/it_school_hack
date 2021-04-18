import SideBar from '../../components/SideBar/'
import HeaderComponent from '../../components/HeaderComponent/'
import DiaryComponent from '../../components/DiaryComponent/'
import {useState} from 'react'

export default function diary (){
const [panel, setPanel] = useState(false)
const [title, setTitle] = useState('')

  return(
    <>
    <SideBar>
      <HeaderComponent panel={panel} title={'ежедневные задания'}/>
      <DiaryComponent/>
    </SideBar>
    </>
  )
}

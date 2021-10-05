import { useContext, useEffect} from 'react'
import { AuthContext } from '../context/AuthContext'


const CalendarView = () => {
const {logOutUser, fetchUserData, user} = useContext(AuthContext)



useEffect(() => {
  fetchUserData();
}, [])


  return (
    <div>
      {user.name}
      <button onClick={logOutUser}>Log out</button>
    </div>
  )
}

export default CalendarView


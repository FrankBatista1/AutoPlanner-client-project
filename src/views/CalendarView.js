import axios from 'axios'
import { useContext, useState, useEffect} from 'react'
import { AuthContext } from '../context/AuthContext'
import apiHelper from '../helpers/apiHelper'


const CalendarView = () => {
const { id } = useContext(AuthContext);
const {logOutUser} = useContext(AuthContext)
const [user, setUser] = useState([])

useEffect(() => {
  fetchUserData();
}, [])

const fetchUserData = async () => {
  const {uid} = await JSON.parse(localStorage.getItem('uid'))
  
  try {
    const { data } = await apiHelper.get(`/users/user/${uid}`);
    setUser(data)
  } catch (error) {
    console.log(error)
  }
};

  return (
    <div>
      {user.name}
      <button onClick={logOutUser}>Log out</button>
    </div>
  )
}

export default CalendarView


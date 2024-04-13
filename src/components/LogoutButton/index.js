import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logoutbtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button onClick={logoutbtn} type="button">
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)

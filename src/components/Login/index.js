import './index.css'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const loginSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const loginbtn = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      loginSuccess(data.jwt_token)
    }
  }

  return (
    <div className="containenr">
      <h1>Please Login</h1>
      <button type="button" onClick={loginbtn}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default withRouter(Login)

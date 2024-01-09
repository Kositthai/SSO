import GoogleButton from 'react-google-button'
import OutlookButton from '../assets/logo-outlook-34049.png'

const Login = () => {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  const outlook = () => {
    window.open('http://localhost:5000/auth/outlook', '_self')
  }

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="space">
            <GoogleButton onClick={google} />
          </div>
          <div className="space">
            <img
              className="outlook"
              src={OutlookButton}
              width={'240px'}
              height={'48px'}
              onClick={outlook}
            />
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login

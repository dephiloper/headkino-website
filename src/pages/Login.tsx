import React from 'react'

const Login: React.FC = () => {
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true')
    window.location.href = '/protected' // Redirect to protected page after login
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login

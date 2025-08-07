import React from 'react'

export default function Header({ styleMode }) {
  return (
    <div style={styleMode}>
        <h1>Welcome to Light/Dark Mode App</h1>
        <img src="https://www.emailonacid.com/wp-content/uploads/2020/10/dark-vs-light-mode-people.jpeg" alt="Light/Dark Mode" style={{maxWidth: '100%', height: 'auto'}} />
    </div>
  )
}

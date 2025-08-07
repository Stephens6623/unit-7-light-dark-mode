import React from 'react'

export default function Content({ styleMode }) {
  return (
    <div style={styleMode}>
        <p>This is an app that expresses functionality of light and dark mode.</p>
        <p>Click the button above to switch between light and dark themes!</p>
        <p>Notice how the background and text colors change when you toggle the mode.</p>
    </div>
  )
}

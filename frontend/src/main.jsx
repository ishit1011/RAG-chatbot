import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.scss';  
// import './assets/styles/auth.scss';   // if you created index.scss
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google'

// Replace with your actual Google Client ID
const clientId = '492209031171-ahk3bnttcaq8fbmet5ls9kg58k0vu18t.apps.googleusercontent.com'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)

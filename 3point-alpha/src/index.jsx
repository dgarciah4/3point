import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { BrowserRouter } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

//const OAUTH = process.env.REACT_APP_GOOGLE_OAUTH_CLIENTID;


ReactDOM.createRoot(document.getElementById('root')).render(
	//<GoogleOAuthProvider clientId='${OAUTH}'>
	//<GoogleOAuthProvider clientId="{process.env.REACT_APP_GOOGLE_OAUTH_CLIENTID}">

	<GoogleOAuthProvider clientId='352439526128-mbjjk65sghqmn5fuqac4dk1nkeplsnkf.apps.googleusercontent.com'>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</GoogleOAuthProvider>
	
)
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/Login/LoginPage'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />} path='/' />
				<Route element={<LoginPage />} path='/login' />
			</Routes>
		</BrowserRouter>
	)
}

export default Router

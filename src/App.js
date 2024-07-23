import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					{AppRoutes.map((route, index) => {
						return <Route path={route.path} key={index} element={route.element} />;
					})}
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;

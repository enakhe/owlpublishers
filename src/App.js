import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Index from './views/Home/Index';
import SignIn from './views/Auth/SignIn';
import SignUp from './views/Auth/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailVerification from './views/Auth/EmailVerification';
import SetUp from './views/Auth/SetUp';
import Write from './views/Write/Write';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/setup' element={<SetUp />} />
					<Route path='/verify-email' element={<EmailVerification />} />
					<Route path='/write' element={<Write />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;

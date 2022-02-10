import { Container } from './components/Container';
import Nav from './components/Nav/Nav';
import Habits from './components/Habits';
import SetHabit from './components/SetHabit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<Container>
				<Nav />
				<Routes>
					<Route path='/set-habit' element={<SetHabit />} />
					<Route path='/' element={<Habits />} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;

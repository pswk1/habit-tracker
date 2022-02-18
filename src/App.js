import { useState } from 'react';
import { Container } from './components/Container';
import Nav from './components/Nav/Nav';
import Habits from './components/Habits/Habits';
import SetHabit from './components/SetHabit/SetHabit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	const [habits, setHabits] = useState([]);

	return (
		<Router>
			<Container>
				<Nav />
				<Routes>
					<Route path='/set-habit' element={<SetHabit habits={habits} setHabits={setHabits} />} />
					<Route path='/' element={<Habits habits={habits} setHabits={setHabits} />} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;

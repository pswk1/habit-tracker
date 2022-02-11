import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Calendar,
	DateCircle,
	DateText,
	NoHabitSet,
	ActionContainer,
	HomeButton,
	AddButton,
	BarChartButton,
} from './HabitsComponents';

const Habits = () => {
	const [habits, setHabits] = useState([]);

	// const addHabit = (newHabit) => {
	// 	setHabits([...habits, newHabit]);
	// }

	const calendarDates = [
		{ day: 'MON', date: 24 },
		{ day: 'TUES', date: 25 },
		{ day: 'WED', date: 26 },
		{ day: 'THURS', date: 27 },
		{ day: 'FRI', date: 28 },
		{ day: 'SAT', date: 29 },
		{ day: 'SUN', date: 30 },
	];

	return (
		<>
			<Calendar>
				{calendarDates.map(({ day, date }) => (
					<DateCircle key={day}>
						<DateText type='day'>{day}</DateText>
						<DateText type='dateNum'>{date}</DateText>
					</DateCircle>
				))}
			</Calendar>

			{habits.length === 0 && (
				<NoHabitSet>You have not set any habits yet.</NoHabitSet>
			)}
			<ActionContainer>
				<HomeButton />
				<Link to={'/set-habit'}>
					<AddButton />
				</Link>
				<BarChartButton />
			</ActionContainer>
		</>
	);
};

export default Habits;

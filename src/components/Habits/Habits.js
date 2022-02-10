import { useState } from 'react';
import { Calendar, DateCircle, DateText} from './HabitsComponents';

const Habits = () => {
	const [habits, setHabits] = useState([]);
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
					<DateCircle>
						<DateText type='day'>{day}</DateText>
						<DateText type='dateNum'>{date}</DateText>
					</DateCircle>
				))}
			</Calendar>
			{habits.length === 0 && <div>You have not set any habits yet.</div>}
		</>
	);
};

export default Habits;

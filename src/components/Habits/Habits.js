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
	HabitsList,
	Habit,
	HabitText,
	HabitTextBox,
	IncrementBtn,
} from './HabitsComponents';

const Habits = ({ habits, setHabits }) => {
	const calendarDates = [
		{ day: 'MON', date: 24 },
		{ day: 'TUES', date: 25 },
		{ day: 'WED', date: 26 },
		{ day: 'THURS', date: 27 },
		{ day: 'FRI', date: 28 },
		{ day: 'SAT', date: 29 },
		{ day: 'SUN', date: 30 },
	];

	const handleComplete = (index) => {
		const habitsCopy = [...habits];
		habitsCopy[index] = { ...habitsCopy[index], complete: true };
		setHabits(habitsCopy);
	};

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

			{habits.length === 0 ? (
				<NoHabitSet>You have not set any habits yet.</NoHabitSet>
			) : (
				<HabitsList>
					{habits.map(({ id, motivation, frequency, complete }, index) => (
						<Habit key={id} complete={complete}>
							<HabitTextBox>
								<HabitText bold>{motivation}</HabitText>
								<HabitText>
									{complete ? '' : `TODAY: 0 / ${frequency}`}
								</HabitText>
							</HabitTextBox>
							{complete ? 'Complete!' : (
								<IncrementBtn onClick={() => handleComplete(index)} />
							)}
						</Habit>
					))}
				</HabitsList>
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

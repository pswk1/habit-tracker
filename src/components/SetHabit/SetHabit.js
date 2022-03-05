import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	SetHabitContainer,
	SelectEl,
	Text,
	Option,
	OptionContainer,
	RowEl,
	Counter,
	CounterBox,
	IncrementBtn,
	DecrementBtn,
	TextArea,
	SubmitBtn,
} from './SetHabitComponents';

const SetHabit = ({ habits, setHabits }) => {
	const [newHabit, setNewHabit] = useState({
		id: habits.length === 0 ? 0 : habits[habits.length - 1].id + 1,
		goalPeriod: '',
		frequency: 0,
		timeOfDay: '',
		motivation: '',
		complete: false,
	});

	const navigate = useNavigate();

	const selectOption = (category, val) => {
		const selected = Object.assign({}, newHabit, { [category]: val });
		setNewHabit(selected);
	};

	const updateFrequency = (type) => {
		let newFreq =
			type === 'increment' ? newHabit.frequency + 1 : newHabit.frequency - 1;

		if (newFreq < 0) newFreq = 0;

		const updatedHabit = {
			...newHabit,
			frequency: newFreq,
		};
		setNewHabit(updatedHabit);
	};

	const handleMotivation = (e) => {
		let userTextInput = e.target.value;
		setNewHabit({
			...newHabit,
			motivation: userTextInput,
		});
	};

	// Why are we checking for an "empty habit"?
	// An empty habit is one without any input regarding user goal period, frequency, etc
	// We won't add an empty habit to our list, so attempting to do so will navigate back to the home page without adding it.

	// We compare the current newHabit state with an object that represents a habit with no user input.
	const isHabitEmpty = () => {
		const unchanged = {
			goalPeriod: '',
			frequency: 0,
			timeOfDay: '',
			motivation: '',
			complete: false,
		};

		for (let key of Object.keys(unchanged)) {
			if (unchanged[key] !== newHabit[key]) {
				return false;
			}
		}
		return true;
	};

	const addHabit = () => {
		if (!isHabitEmpty()) {
			setHabits([...habits, newHabit]);
		}
		navigate('/');
	};

	return (
		<SetHabitContainer>
			<SelectEl>
				<Text>Goal Period</Text>
				<OptionContainer>
					<Option
						data-testid='daily'
						selected={newHabit.goalPeriod === 'Daily' && true}
						onClick={() => selectOption('goalPeriod', 'Daily')}
					>
						Daily
					</Option>
					<Option
						selected={newHabit.goalPeriod === 'Weekly' && true}
						onClick={() => selectOption('goalPeriod', 'Weekly')}
					>
						Weekly
					</Option>
					<Option
						selected={newHabit.goalPeriod === 'Monthly' && true}
						onClick={() => selectOption('goalPeriod', 'Monthly')}
					>
						Monthly
					</Option>
				</OptionContainer>
			</SelectEl>

			<RowEl>
				<Text>How many times per day?</Text>
				<CounterBox>
					<DecrementBtn onClick={() => updateFrequency('decrement')} />
					<Counter>{newHabit.frequency}</Counter>
					<IncrementBtn data-testid='increment' onClick={() => updateFrequency('increment')} />
				</CounterBox>
			</RowEl>

			<SelectEl>
				<Text>Time Of Day</Text>
				<Option
					selected={newHabit.timeOfDay === 'Anytime' && true}
					onClick={() => selectOption('timeOfDay', 'Anytime')}
				>
					Anytime
				</Option>
				<Option
					selected={newHabit.timeOfDay === 'Morning' && true}
					onClick={() => selectOption('timeOfDay', 'Morning')}
				>
					Morning
				</Option>
				<Option
					selected={newHabit.timeOfDay === 'Afternoon' && true}
					onClick={() => selectOption('timeOfDay', 'Afternoon')}
				>
					Afternoon
				</Option>
				<Option
					selected={newHabit.timeOfDay === 'Evening' && true}
					onClick={() => selectOption('timeOfDay', 'Evening')}
				>
					Evening
				</Option>
			</SelectEl>

			<RowEl>
				<Text>Start Date</Text>
				<Text bold>May 28</Text>
			</RowEl>

			<RowEl>
				<Text>End Date</Text>
				<Text bold>None</Text>
			</RowEl>

			<RowEl>
				<Text>Reminders</Text>
				<Text bold>5:00 PM</Text>
			</RowEl>

			<RowEl>
				<Text>Write something to motivate yourself:</Text>
			</RowEl>

			<TextArea value={newHabit.motivation} onChange={handleMotivation} />
			<SubmitBtn data-testid='submit' onClick={addHabit}>Next</SubmitBtn>
		</SetHabitContainer>
	);
};

export default SetHabit;

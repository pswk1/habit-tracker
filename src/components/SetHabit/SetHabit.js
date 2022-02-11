import { useState } from 'react';
import {
	SetHabitContainer,
	GoalEl,
	Text,
	Option,
	PerDayEl,
	Counter,
	CounterBox,
	IncrementBtn,
	DecrementBtn,
} from './SetHabitComponents';

const SetHabit = () => {
	const [newHabit, setNewHabit] = useState({
		goalPeriod: '',
		frequency: 0,
		timeOfDay: '',
		motivation: '',
	});

	const selectOption = (category, val) => {
		const selected = Object.assign({}, newHabit, { [category]: val });
		setNewHabit(selected);
	};

	const handleFrequency = (type) => {
		let newFreq;

    if (type === 'increment') {
      newFreq = newHabit.frequency + 1
    } else {
      newFreq = newHabit.frequency - 1;
    }

    if (newFreq < 0) newFreq = 0;

			const updatedHabit = {
        ...newHabit,
        frequency: newFreq
      }
			setNewHabit(updatedHabit);
		
	};

	return (
		<SetHabitContainer>
			<GoalEl>
				<Text>Goal Period</Text>
				<Option
					selected={newHabit.goalPeriod === 'Daily' ? true : false}
					onClick={() => selectOption('goalPeriod', 'Daily')}
				>
					Daily
				</Option>
				<Option
					selected={newHabit.goalPeriod === 'Weekly' ? true : false}
					onClick={() => selectOption('goalPeriod', 'Weekly')}
				>
					Weekly
				</Option>
				<Option
					selected={newHabit.goalPeriod === 'Monthly' ? true : false}
					onClick={() => selectOption('goalPeriod', 'Monthly')}
				>
					Monthly
				</Option>
			</GoalEl>

			<PerDayEl>
				<Text>How many times per day?</Text>
				<CounterBox>
					<DecrementBtn onClick={() => handleFrequency('decrement')} />
					<Counter>{newHabit.frequency}</Counter>
					<IncrementBtn onClick={() => handleFrequency('increment')} />
				</CounterBox>
			</PerDayEl>
		</SetHabitContainer>
	);
};

export default SetHabit;

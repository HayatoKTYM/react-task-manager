import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TaskForm from './TaskForm';

export default {
	title: 'components/TaskForm',
	component: TaskForm,
} as Meta<typeof TaskForm>;

export const Template: StoryObj<typeof TaskForm> = {
	render: () => <TaskForm />,
};
// export const Example = Template.bind({});

import React from 'react';
import { useRecoilState } from 'recoil';
import { Box, Input, Button, Flex, Heading } from '@chakra-ui/react';
import useAddTask from '../hooks/useAddTask';
import { newTaskState } from '../state/atoms';

const TaskForm: React.FC = () => {
	const [newTask, setNewTask] = useRecoilState(newTaskState);
	const addTask = useAddTask();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addTask(newTask);
		setNewTask('');
	};

	return (
		<Box as="form" onSubmit={handleSubmit} mb="4">
			<Heading as="h2" size="md" mb={4}>
				新規タスクの追加
			</Heading>
			<Flex>
				<Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
				<Button
					type="submit"
					isDisabled={newTask.trim() === ''}
					colorScheme="blue"
					ml="2"
				>
					追加
				</Button>
			</Flex>
		</Box>
	);
};

export default TaskForm;

import React from 'react';
import { useRecoilState } from 'recoil';
import {
	Box,
	Text,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Select,
	Heading,
	Input,
	IconButton,
	Flex,
} from '@chakra-ui/react';
import { EditIcon, StarIcon } from '@chakra-ui/icons';
import { Task, sortState, editingIndexState } from '../state/atoms';
import useToggleTask from '../hooks/useToggleTask';
import useSortedTasks from '../hooks/useSortedTask';
import useEditTask from '../hooks/useEditTask';
import useToggleFav from '../hooks/useToggleFav';
// import './TableStyle.css';

const TaskList: React.FC = () => {
	const sortedTasks = useSortedTasks();
	const toggleStatus = useToggleTask();
	const [sort, setSort] = useRecoilState(sortState);
	const [editingIndex, setEditingIndex] = useRecoilState(editingIndexState);
	const updateFavorite = useToggleFav();
	const editTask = useEditTask();

	const toggleSort = (key: keyof Task) => {
		setSort({
			key,
			direction: sort.direction === 'ascending' ? 'descending' : 'ascending',
		});
	};

	return (
		<Box>
			<Heading as="h2" size="md" mb={4}>
				タスク一覧
			</Heading>
			<Table variant="simple" fontSize={['10px', '12px', '14px', '16px']}>
				<Thead>
					<Tr>
						<Th width="1%" bg="gray.100"></Th>
						<Th
							cursor="pointer"
							width="70%"
							onClick={() => toggleSort('text')}
							bg="gray.100"
						>
							Title{' '}
							{sort.key !== 'text'
								? ''
								: sort.direction === 'ascending'
								? '↑'
								: '↓'}
						</Th>
						<Th
							cursor="pointer"
							width="25%"
							onClick={() => toggleSort('status')}
							bg="gray.100"
						>
							Status{' '}
							{sort.key !== 'status'
								? ''
								: sort.direction === 'ascending'
								? '↑'
								: '↓'}
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{sortedTasks.map((task) => (
						<Tr key={task.id}>
							<Td p={0}>
								<IconButton
									aria-label="star-icon"
									icon={<StarIcon />}
									color={task.fav ? '#F8C62D' : 'darkGray-100'}
									bg="transparent"
									_hover={{ bg: 'transparent' }}
									onClick={() => {
										updateFavorite(task.id);
									}}
								/>
							</Td>
							<Td>
								<Flex direction="row" justify="space-between" align="center">
									<Box>
										{task.id === editingIndex ? (
											<Input
												value={task.text}
												onChange={(e) => {
													editTask(task.id, e.target.value);
												}}
												onBlur={() => setEditingIndex(null)}
												size="sm"
												errorBorderColor="pink.400"
												isInvalid
											/>
										) : (
											<Text fontSize="sm">{task.text}</Text>
										)}
									</Box>
									<Box>
										<IconButton
											aria-label="edit-icon"
											icon={<EditIcon />}
											onClick={() => {
												setEditingIndex(task.id);
											}}
											bg="transparent"
										/>
									</Box>
								</Flex>
							</Td>
							<Td p={2}>
								<Select
									value={task.status}
									size="sm"
									onChange={(e) =>
										toggleStatus(task.id, e.target.value as Task['status'])
									}
									bg={
										task.status === 'done'
											? 'red.200'
											: task.status === 'doing'
											? 'blue.200'
											: 'white'
									}
								>
									<option value="todo">Todo</option>
									<option value="doing">Doing</option>
									<option value="done">Done</option>
								</Select>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
};

export default TaskList;

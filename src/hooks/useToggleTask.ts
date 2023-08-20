import { useRecoilState } from 'recoil';
import { Task, taskState } from '../state/atoms';

const useToggleTask = () => {
	const [tasks, setTasks] = useRecoilState(taskState);

	const toggleTask = (id: string, newStatus: Task['status'] = 'todo') => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, status: newStatus } : task
			)
		);
	};
	return toggleTask;
};

export default useToggleTask;

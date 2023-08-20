import { v4 as uuidv4 } from 'uuid';
import { useRecoilState } from 'recoil';
import { taskState, Task } from '../state/atoms';


const useAddTask = () => {
	const [tasks, setTasks] = useRecoilState(taskState);

	const addTask = (text: string) => {
		const newTask: Task = { id: uuidv4(), text: text, status: 'todo', fav: false };
		setTasks([...tasks, newTask]);
	};
	return addTask;
};

export default useAddTask;

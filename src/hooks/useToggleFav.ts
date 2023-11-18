import { useRecoilState } from 'recoil';
import { taskState } from '../state/atoms';

const useToggleFav = () => {
	const [tasks, setTasks] = useRecoilState(taskState);

	const toggleTask = (id: string) => {
		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, fav: !task.fav } : task))
		);
	};
	return toggleTask;
};

export default useToggleFav;

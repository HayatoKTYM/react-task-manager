import { useRecoilState } from 'recoil';
import { taskState } from '../state/atoms';

const useEditTask = () => {
  const [tasks, setTasks] = useRecoilState(taskState);

  const editTask = (id: string, newTitle: string) => {
    setTasks(
        tasks.map((task) =>
            task.id == id ? { ...task, text: newTitle} : task
        )
    )
  };

  return editTask;
};

export default useEditTask;
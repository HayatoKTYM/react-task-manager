import { selector, useRecoilValue } from 'recoil';
import { Task, taskState, sortState } from '../state/atoms';

export const sortedTasks = selector<Task[]>({
	key: 'sortedTasks',
	get: ({ get }) => {
		const tasks = get(taskState);
		const sort = get(sortState);

		return [...tasks].sort((a, b) => {
			if (a[sort.key] < b[sort.key])
				return sort.direction === 'ascending' ? -1 : 1;
			if (a[sort.key] > b[sort.key])
				return sort.direction === 'ascending' ? 1 : -1;
			return 0;
		});
	},
});

const useSortedTasks = () => {
	return useRecoilValue(sortedTasks);
};

export default useSortedTasks;

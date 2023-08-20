import { atom } from 'recoil';

export type Task = {
	id: string;
	text: string;
	status: 'todo' | 'doing' | 'done'; // ステータスを追加
  fav: boolean
};

// タスクリスト用のatomを作成
export const taskState = atom<Task[]>({
	key: 'taskState',
	default: [],
});

export type SortState = {
	key: keyof Task;
	direction: 'ascending' | 'descending';
};

export const sortState = atom<SortState>({
	key: 'sortState',
	default: { key: 'text', direction: 'ascending' }, // 初期値を設定
});

export const newTaskState = atom<string>({
	key: 'newTaskState',
	default: '',
});

export const editingIndexState = atom<string | null>({
  key: 'editingIndexState',
  default: null,
});

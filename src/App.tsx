import React from 'react';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
	return (
		<ChakraProvider>
			<CSSReset />
			<RecoilRoot>
				<Box maxW={{ base: '100%', md: '80%' }} m="auto" p={2}>
					<TaskForm />
					<TaskList />
				</Box>
			</RecoilRoot>
		</ChakraProvider>
	);
}

export default App;

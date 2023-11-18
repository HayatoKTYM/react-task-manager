import type { Preview } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { worker } from '../src/mocks/browser';

if (typeof global.process === 'undefined') {
	worker.start();
}
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<ChakraProvider>
				<CSSReset />
				<RecoilRoot>
					<Story />
				</RecoilRoot>
			</ChakraProvider>
		),
	],
};

export default preview;

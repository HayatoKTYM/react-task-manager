import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import FavoriteButton from './FavoriteButton';

export default {
	title: 'FavoriteButton',
	component: FavoriteButton,
} as Meta;

export const Template: StoryObj = {
	render: () => <FavoriteButton />,
};
// export const Default = Template.bind({});

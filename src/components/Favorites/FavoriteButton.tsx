import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const FavoriteButton: React.FC = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleClick = async () => {
		setIsFavorite(!isFavorite);
		const method = isFavorite ? 'DELETE' : 'POST';
		await fetch('/api/favorite', { method });
	};

	return (
		<IconButton
			aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
			icon={<StarIcon />}
			colorScheme={isFavorite ? 'red' : 'gray'}
			onClick={handleClick}
		/>
	);
};

export default FavoriteButton;

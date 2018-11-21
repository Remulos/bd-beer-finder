import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import BeerCard from './BeerCard';
import SelectedBeerCard from './SelectedBeerCard';

const Results = ({ beers, handleBeerSelect, selectedBeer }) => {
	const beerMap = beers.map(beer => {
		return (
			<GridListTile cols={6} key={beer.id}>
				<BeerCard beer={beer} handleBeerSelect={handleBeerSelect} />
			</GridListTile>
		);
	});
	if (!selectedBeer) {
		return <div>{beerMap}</div>;
	} else {
		return (
			<div>
				<GridListTile cols={6} key={selectedBeer.id}>
					<SelectedBeerCard
						beer={selectedBeer}
						handleBeerSelect={handleBeerSelect}
					/>
				</GridListTile>
				<div>{beerMap}</div>
			</div>
		);
	}
};

export default Results;

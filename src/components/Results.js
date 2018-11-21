import React from 'react';
import BeerCard from './BeerCard';

const Results = ({ beers, handleBeerSelect, selectedBeer }) => {
	const beerMap = beers.map(beer => {
		return (
			<BeerCard
				key={beer.id}
				beer={beer}
				handleBeerSelect={handleBeerSelect}
			/>
		);
	});
	if (!selectedBeer) {
		return <div>{beerMap}</div>;
	} else {
		return (
			<div>
				<BeerCard
					key={selectedBeer.id}
					beer={selectedBeer}
					handleBeerSelect={handleBeerSelect}
				/>
				<div>{beerMap}</div>
			</div>
		);
	}
};

export default Results;

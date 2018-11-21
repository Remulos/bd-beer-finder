import React from 'react';
import BeerCard from './BeerCard';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing.unit * 2,
	},
});

const decider = resultsList => {
	if (!this.props.handleBeerSelect) {
		return (
			<Grid container className="root" spacing={24} xs={12}>
				{resultsList}
			</Grid>
		);
	} else {
		return (
			(
				<Grid container className="root" spacing={24} xs={6}>
					{resultsList}
				</Grid>
			),
			(
				<Grid container spacing={24} xs={6}>
					<BeerCard
						key={this.props.beer.id}
						beer={this.props.beer}
						handleBeerSelect={this.handleBeerSelect}
					/>
				</Grid>
			)
		);
	}
};

const Results = ({ beers, handleBeerSelect }) => {
	const resultsList = beers.map(beer => {
		return (
			<BeerCard
				key={beer.id}
				beer={beer}
				handleBeerSelect={handleBeerSelect}
			/>
		);
	});
	return resultsList;
	console.log(resultsList);
};

export default Results;

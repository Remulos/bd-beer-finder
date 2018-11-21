import React from 'react';

class BeerCard extends React.Component {
	state = { isSelected: false };

	render() {
		return (
			<div
				key={this.props.key}
				onClick={beer => this.props.handleBeerSelect(this.props.beer)}
			>
				<h1>{this.props.beer.name}</h1>
				<p>{this.props.beer.description}</p>
			</div>
		);
	}
}

export default BeerCard;

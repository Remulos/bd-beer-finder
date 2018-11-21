// In App.js

state = { beers: [], selectedBeer: null };

// This is a callback function to bring props up from child
handleBeerSelect = beer => {
    this.setState({ selectedBeer: beer });
};

//...
this.setState({ beers: response.data });
//...

render() {
    return(
        //...
      <Results
				beers={this.state.beers}
				handleBeerSelect={this.handleBeerSelect}
			/>
    )
}
//--------------------------------------------------------------------
// Inside Results.js
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
	return <div>{() => decider()}</div>;
};

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

//--------------------------------------------------------------------
// From BeerCard.js

//...
<Card
	className={classes.card}
	onClick={this.props.handleBeerSelect(this.props.beer)}
	>
</Card>
//...
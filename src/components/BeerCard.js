import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';

const style = {
	height: 140,
};

const BeerCard = props => {
	return (
		<div onClick={() => props.handleBeerSelect(props.beer)}>
			<Card>
				<CardHeader title={props.beer.name} />
				<CardMedia
					image={props.beer.image_url}
					title="Label"
					className="media"
					style={style}
				/>
				<CardContent>
					<Typography component="p">
						{' '}
						{props.beer.description}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default BeerCard;

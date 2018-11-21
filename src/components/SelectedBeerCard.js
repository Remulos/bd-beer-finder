import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import GridListTile from '@material-ui/core/GridListTile';

const style = {
	height: 140,
};

class SelectedBeerCard extends React.Component {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	render() {
		return (
			<div onClick={() => this.props.handleBeerSelect(this.props.beer)}>
				<Card>
					<CardHeader title={this.props.beer.name} />
					<CardMedia
						image={this.props.beer.image_url}
						title="Label"
						className="media"
						style={style}
					/>
					<CardContent>
						<Typography component="p">
							{' '}
							{this.props.beer.description}
						</Typography>
					</CardContent>
					<CardActions disableActionSpacing>
						<IconButton
							className="expand"
							onClick={this.handleExpandClick}
							aria-expanded={this.state.expanded}
							aria-label="Show more"
						>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
					<Collapse
						in={this.state.expanded}
						timeout="auto"
						unmountOnExit
					>
						<CardContent>
							<Typography paragraph>
								{this.props.beer.brewers_tips}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

export default SelectedBeerCard;

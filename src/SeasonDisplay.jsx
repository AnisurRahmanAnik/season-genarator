import React from 'react';
import './SeasonDisplay.css'


let getSeason=(lat,month)=>{
	if(month>2 && month<9)
		return lat>0 ? 'summer' : 'winter'
	else
		return lat>0 ? 'winter' : 'summer'
}
let seasonConfig={
	summer : {
		text : "Let's hit beach",
		iconName : "sun icon massive"
	},
	winter : {
		text : "Burry chill",
		iconName : "snowflake icon massive"
	}
}
class SeasonDisplay extends React.Component{
	render(){
		let month = new Date().getMonth();
		let season = getSeason(this.props.lat,month);
		let {text,iconName} = seasonConfig[season];
		return(
			<div className={`${season} season-display`}>
				<i className={`left ${iconName}`}></i>
				<h1>{text}</h1>
				<i className={`right ${iconName}`}></i>
			</div>
			);
	}
}
export default SeasonDisplay;
import React from 'react';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component{
	state = {lat : null,errMsg : ''}
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			position =>	this.setState({lat : position.coords.latitude}),
			err=>this.setState({errMsg : err.message})
			)
	}
	render(){
			if(this.state.lat && !this.state.errMsg)
				return <SeasonDisplay lat={this.state.lat}/>
 			else if(!this.state.lat && this.state.errMsg)
 				return <div>Error : {this.state.errMsg}</div>
 			else
 				return <Spinner message="Pleas accept location request"/>
 }
}
export default App; 
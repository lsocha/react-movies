import React, { Component } from 'react';

class Header extends Component {

	// react style render
	// render() {
	//     return React.createElement( 'div', null, 'Hello there, this is a React component!' );
	// }

	render() {
		return (
		  <div className="App-header">
		    <h2>{this.props.text}</h2>
		  </div>
		);
	}
}

export default Header;
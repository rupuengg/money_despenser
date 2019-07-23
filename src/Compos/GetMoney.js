import React, {Component} from 'react';

class GetMoney extends Component{
	constructor(props){
		super(props)

		this.state = {
			amount: this.props.amount
		};
	}

	handleChange = (e) => {
		e.preventDefault();
	    this.setState({
	    	amount: e.target.value
	    });
	}

	handleButtonClick = (e) => {
		this.props.handleClick(this.state.amount);
	}

	render(){
		const amount = this.state.amount;

		return (
			<div>
				<input type="text" value={amount} onChange={this.handleChange} />
				<br/><br/><br/>
				<button onClick={this.handleButtonClick}>Get Money</button>
			</div>
		);
	}
}

export default GetMoney;
import React, {Component} from 'react';
import './App.css';
import GetMoney from './Compos/GetMoney';
import ShowNotes from './Compos/ShowNotes';

class App extends Component{
	constructor(){
		super();

		this.state = {
			amount: 7386
		}
	}

	handleClick = (amount) => {
		this.setState({
			amount
		});
	}

	render(){
		const amount = this.state.amount;

	    return ( 
	    	<div className = "App" >
	    		<header className="App-header"></header>
	    		<div className="box">
	    			<ul>
	    				<li><GetMoney amount={amount} handleClick={this.handleClick} /></li>
	    				<li><ShowNotes amount={amount} /></li>
	    			</ul>
	    		</div>
	        </div>
	    );
    }
}

export default App;
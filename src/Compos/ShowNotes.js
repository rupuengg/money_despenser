import React, {Component} from 'react';

const NOTES = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

class ShowNotes extends Component{
	constructor(props){
		super(props);
	}

	getMoney(event){
		let a = NOTES;

		let amount = this.props.amount;

		return a.map((note) => {
			console.log('Note', note);
			let number_of = parseInt(amount / note);
			amount = amount % note;
			return {
				note,
				number_of
			};
		});
	}

	render(){
		const noteNode = this.getMoney().map((ele, i) => {
			return (
				<li key={i}>
					{ele.note + ' notes of Rs ' + ele.number_of}
				</li>
			);
		});
		console.log('Render', this.props);

		return (
			<div>
				<ul>{noteNode}</ul>
			</div>
		);
	}
}

export default ShowNotes;
import shortStyle from '../../styles/shortit.module.css';
import axios from 'axios';
import React, { Component } from 'react';

class shortit extends Component {
	state = {
		input: '',
		myData: []
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleCopy = (e, i) => {
		e.target.textContent = 'Copied!';
		e.target.style.background = '#6f5cb6';
		navigator.clipboard.writeText(i);
		setTimeout(function Copy() {
			e.target.textContent = 'Copy';
			e.target.style.background = '#eb6832';
		}, 2000);
	};
	onSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`https://api.shrtco.de/v2/shorten?url=${this.state.input}`)
			.then((res) =>
				this.setState({
					myData: [ ...this.state.myData, res.data.result ]
				})
			)
			.catch((err) => console.log(err));
	};
	render() {
		const { myData, input } = this.state;
		console.log(myData);
		return (
			<div>
				<div className={shortStyle.shrt}>
					<form className="text-center" onSubmit={this.onSubmit}>
						<input
							className={shortStyle.input}
							type="text"
							placeholder="Shorten a link here..."
							name="input"
							onChange={this.onChange}
						/>
						<button className={shortStyle.btn}>Shorten It!</button>
						{input == '' && <div className={shortStyle.adjust}>Please add a link</div>}
					</form>
				</div>
				{myData.length >= 1 &&
					myData.map((item, i) => (
						<div className={shortStyle.data} key={i}>
							<div>
								<h4>{item.original_link}</h4>
							</div>
							<div style={{ display: 'flex' }}>
								<textarea
									readOnly
									className="mx-8"
									value={item.short_link}
									style={{ border: 'none', outline: 'none', maxWidth: '20rem' }}
								/>
								<button
									onClick={(e) => this.handleCopy(e, item.short_link)}
									className={shortStyle.btn2}
								>
									Copy
								</button>
							</div>
						</div>
					))}
			</div>
		);
	}
}
export default shortit;

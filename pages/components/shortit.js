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

	handleCopy = (e) => {
		const btntxt = document.getElementById('btnContent');
		let copyText = document.getElementById('copy');
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand('copy');
		e.target.focus();
		btntxt.textContent = 'Copied!';
		btntxt.style.background = '#6f5cb6';
		setTimeout(function Copy() {
			btntxt.textContent = 'Copy';
			btntxt.style.background = '#eb6832';
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
					myData.map((item) => (
						<div className={shortStyle.data}>
							<div>
								<h4>{item.original_link}</h4>
							</div>
							<div style={{ display: 'flex' }}>
								<input
									readOnly
									className="mx-8"
									id="copy"
									value={item.short_link}
									style={{ border: 'none', outline: 'none' }}
								/>
								<button id="btnContent" onClick={this.handleCopy} className={shortStyle.btn2}>
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

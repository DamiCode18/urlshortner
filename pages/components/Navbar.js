import Link from 'next/link';
import { Component } from 'react';
import navStyle from '../../styles/Nav.module.css';

export default class Navbar extends Component {
	state = {
		dark: false
	};
	handleMode = () => {
		this.setState({
			dark: !this.state.dark
		});
	};
	render() {
		const { dark } = this.state;
		return (
			<div className={navStyle.navBg}>
				<div>
					<Link href="#">
						<a className={navStyle.hm}>Urlshortner</a>
					</Link>
				</div>
				<div>
					<ul className={navStyle.ul}>
						<li className={navStyle.li}>
							<Link href="#">About</Link>
						</li>
						<li className={navStyle.li}>
							<Link href="/#">Services</Link>
						</li>
						<li className={navStyle.li}>
							<Link href="#">Offers</Link>
						</li>
					</ul>
				</div>
				<div>
					{/* <a onClick={this.handleMode} className="mx-4 cursor-pointer">
						{dark ? 'Lightmode' : 'Darkmode'}
					</a> */}
					<Link href="/login">
						<a className={navStyle.btn}>Login</a>
					</Link>
				</div>
			</div>
		);
	}
}

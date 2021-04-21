import Link from 'next/link';
import { Component } from 'react';
import navStyle from '../../styles/Nav.module.css';



export default class Navbar extends Component {
	state = {
		isExpanded: false
	}
	
	hambuger=()=>{
			this.setState({isExpanded: !this.state.isExpanded});
	}
	render() {
		const {isExpanded} = this.state;
		return (
			<div className={navStyle.navBg}>
				<div>
					<Link href="#">
						<a className={navStyle.hm}>Urlshortner</a>
					</Link>
				</div>
				<div>
				<div className={navStyle.fa}>
						<i className="fa fa-bars text-2xl" onClick={this.hambuger}></i>
						</div>
						{isExpanded && window.innerWidth < 769 ?
						<div className={navStyle.hbg}>
						<div>
							<ul className={navStyle.ul}>
								<li className={navStyle.li}>
									<Link href="#">About</Link>
								</li>
								<li className={navStyle.li}>
									<Link href="#">Services</Link>
								</li>
								<li className={navStyle.li}>
									<Link href="#">Offers</Link>
								</li>
							</ul>					
						</div>
						<div>
							<Link href="#">
								<a className={navStyle.btn}>Login</a>
							</Link>
						</div>
						</div> : 
							null
			
	}
						<div className={navStyle.hide}>
							<div>
								<ul className={navStyle.ul}>
									<li className={navStyle.li}>
										<Link href="#">About</Link>
									</li>
									<li className={navStyle.li}>
										<Link href="#">Services</Link>
									</li>
									<li className={navStyle.li}>
										<Link href="#">Offers</Link>
									</li>
								</ul>					
							</div>
							<div>
								<Link href="#">
									<a className={navStyle.btn}>Login</a>
								</Link>
							</div>
							</div>
					</div>
					
			
			</div>
		);
	}
}

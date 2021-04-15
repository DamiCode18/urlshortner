import Link from 'next/link';
import { Component } from 'react';
import navStyle from '../../styles/Nav.module.css';

export default class Navbar extends Component {
	// hambuger=()=>{
	// 	var x = document.getElementById("myLinks");
	// 	if (x.style.display === "block") {
	// 		x.style.display = "none";
	// 	} else {
	// 		x.style.display = "block";
	// 	}
	// }
	render() {
		return (
			<div className={navStyle.navBg}>
				<div>
					<Link href="#">
						<a className={navStyle.hm}>Urlshortner</a>
					</Link>
				</div>
				<div className={navStyle.fa}>
						<i class="fa fa-bars text-2xl"></i>
					</div>
				<span id="myLinks" class={navStyle.hide}>
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
					<Link href="#">
						<a className={navStyle.btn}>Login</a>
					</Link>
				</div>
				</span>
			
			</div>
		);
	}
}

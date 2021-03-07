import Link from 'next/link';
import navStyle from '../../styles/Nav.module.css';

export default function Navbar() {
	return (
		<div className={navStyle.navBg}>
			<div>
				<Link href="/">
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
				<Link href="/login">
					<a className={navStyle.btn}>Login</a>
				</Link>
			</div>
		</div>
	);
}

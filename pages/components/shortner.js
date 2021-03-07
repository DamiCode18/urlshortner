import shortnerStyle from '../../styles/shortner.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function shortner() {
	return (
		<div className={shortnerStyle.home}>
			<div className="flex justify-between">
				<div className={shortnerStyle.pad}>
					<h1 className={shortnerStyle.title}>Shorten that long url, the pain in your ass!!!</h1>
					<p className={shortnerStyle.desc}>
						Build your brand's recognition and get detailed insights on how your links are performing
					</p>
					<div className="mt-8">
						<Link href="/login">
							<a className={shortnerStyle.btn}>Get started</a>
						</Link>
					</div>
				</div>
				<div className="py-8">
					<Image src="/Rectangle 1.svg" alt="Picture of the author" width={550} height={550} />
				</div>
			</div>
		</div>
	);
}

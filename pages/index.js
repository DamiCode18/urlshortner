import Head from 'next/head';
import Shortner from './components/shortner';
import Features from './components/features';
import Shortit from './components/shortit';
export default function Home() {
	return (
		<div>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
				<title>Url-Shortner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Shortner />
				<Shortit />
				<Features />
			</main>
		</div>
	);
}

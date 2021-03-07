import featuresStyle from '../../styles/Features.module.css';
import Image from 'next/image';

export default function features() {
	return (
		<div className={featuresStyle.home}>
			<h3 className={featuresStyle.head}>Features</h3>
			<div>
				<h1 className={featuresStyle.subhead}>What we offer</h1>
				<div className="flex justify-between" style={{ paddingLeft: '12rem', paddingRight: '12rem' }}>
					<div>
						<div className="flex justify ml-8 my-6">
							<Image src="/Teaching 1.svg" alt="img" width={80} height={80} />
						</div>
						<h5 className={featuresStyle.h5tag}>Spaced Classes</h5>
						<p className={featuresStyle.ptag}>
							Here, classes are flexible with specific timing set for the convenience of students
						</p>
					</div>
					<div>
						<div className="flex justify ml-8 my-6">
							<Image src="/Test 1.svg" alt="img" width={80} height={80} />
						</div>
						<h5 className={featuresStyle.h5tag}>Test and Homework</h5>
						<p className={featuresStyle.ptag}>
							Top and applicable questions set for students to enhance problem-solving ability
						</p>
					</div>
					<div>
						<div className="flex justify ml-8 my-6">
							<Image src="/Certificate 3.svg" alt="img" width={80} height={80} />
						</div>
						<h5 className={featuresStyle.h5tag}>Certification</h5>
						<p className={featuresStyle.ptag}>World-regonized certificate upon completion</p>
					</div>
				</div>
			</div>
		</div>
	);
}

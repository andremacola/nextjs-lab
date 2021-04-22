import Link from 'next/link'

function Tempo(props) {
	const dynamicDate = new Date();
	const dynamicDateString = dynamicDate.toGMTString();

	return (
		<div>
			<p>{dynamicDateString} (dinâmico)</p>
			<p>{props.staticDateString} (estático)</p>
			<p>
				<Link href="/"><a>Home</a></Link>
			</p>
			<p>
				<Link href="/sobre"><a>Sobre</a></Link>
			</p>
		</div>
	)
}

export async function getStaticProps() {
	const staticDate = new Date();
	const staticDateString = staticDate.toGMTString();

	await delay(5000)

	return {
		props: {
			staticDateString
		},
		revalidate: 10
	}
}

const delay = ms => new Promise(res => setTimeout(res, ms))

export default Tempo;

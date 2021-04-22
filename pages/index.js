import { useState } from 'react'
import Link from 'next/link'

function Home() {
	return (
		<>
			<h1>Home</h1>
			<p>
				<Link href="/sobre"><a>Sobre</a></Link>
			</p>
			<p>
				<Link href="/tempo"><a>Tempo</a></Link>
			</p>
			<Contador />
		</>
	)
}

function Contador() {
	const [contador, setContador] = useState(1)

	function adicionarContador() {
		setContador(contador + 1);
	}

	return (
		<div>
			<div>{contador}</div>
			<button onClick={adicionarContador}>Adicionar</button>
		</div>
	)
}

export default Home

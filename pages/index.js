import { useState } from 'react'
import Link from 'next/link'

function Home() {
	return (
		<>
			<h1>Home</h1>
			<Link href="/sobre">
				<p><a>Link de exemplo pra página Sobre</a></p>
			</Link>
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

import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <h1>React ❤️ Next.js</h1>
            <nav className="flex gap-4">
                {/* <Link href="/" className="hover:underline">Intro</Link>
                <Link href="/sobre" className="hover:underline">Sobre</Link> */}

                <Link href="/" className="hover:underline">HomePage</Link>
                <Link href="/projetos" className="hover:underline">ProjetosPage</Link>
                <Link href="/sobre" className="hover:underline">Sobre</Link>
                <Link href="/tecnologias" className="hover:underline">Tecnologias</Link>
                <Link href="/caracteristicas" className="hover:underline">Características</Link>
            </nav>
        </header>
    )
}

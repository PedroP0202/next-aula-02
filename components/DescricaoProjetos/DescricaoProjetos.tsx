import { Projeto } from '@/components/Projeto/Projeto'

export function DescricaoProjetos() {
    return (
        <section className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Os meus projetos</h2>
            <p className="mb-4">
                Já desenvolvi vários projetos ao longo do tempo. Pode ver todos listados na minha homepage do GitHub Pages:
            </p>

            <a
                href="https://PedroP0202.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
            >
                Aceder ao meu GitHub Pages
            </a>

            <div className="mt-6">
                <Projeto nome="Loja com JS interativo" url="https://pedrop0202.github.io/meu-portofolio1/LAB7-DIW/index.html" />

            </div>
        </section>
    )
}

export default DescricaoProjetos

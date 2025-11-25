
interface ProjetoProps {
  nome: string; 
  url: string; 
  
}


export function Projeto({ nome, url } : ProjetoProps) {
    return (
        <div className="p-4 border rounded-xl shadow-sm my-2">
            <p>
                Projeto: <strong>{nome}</strong> — Confira em: {" "}
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {url}
                </a>
            </p>
        </div>
    );
}
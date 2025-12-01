"use client";

import React, { useState } from "react";
import tecnologias from "../../data/tecnologias.json";

export default function InputPage() {
  const [texto, setTexto] = useState("");
  const [selecionada, setSelecionada] = useState<string>(tecnologias[0].title);

  type Task = { id: string; title: string };
  const [tarefas, setTarefas] = useState<Task[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [valorEdit, setValorEdit] = useState("");

  function handleAdd() {
    if (!novaTarefa.trim()) return;
    const tarefa: Task = { id: String(Date.now()), title: novaTarefa.trim() };
    setTarefas((prev) => [tarefa, ...prev]);
    setNovaTarefa("");
  }

  function handleDelete(id: string) {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  }

  function startEdit(t: Task) {
    setEditandoId(t.id);
    setValorEdit(t.title);
  }

  function cancelEdit() {
    setEditandoId(null);
    setValorEdit("");
  }

  function saveEdit(id: string) {
    setTarefas((prev) => prev.map((t) => (t.id === id ? { ...t, title: valorEdit } : t)));
    cancelEdit();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Página de Input</h1>

      
      <section className="mb-8">
        <label htmlFor="text-input" className="block font-medium mb-2">Digite um texto:</label>
        <input
          id="text-input"
          className="w-full p-2 border rounded mb-2"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite algo..."
        />
        <div className="p-2 bg-gray-100 rounded">Preview: {texto}</div>
      </section>

      
      <section className="mb-8">
        <label htmlFor="select-tec" className="block font-medium mb-2">Escolha uma tecnologia:</label>
        <select
          id="select-tec"
          className="p-2 border rounded w-full"
          value={selecionada}
          onChange={(e) => setSelecionada(e.target.value)}
        >
          {tecnologias.map((t) => (
            <option key={t.title} value={t.title}>
              {t.title}
            </option>
          ))}
        </select>

        <div className="mt-4 p-3 border rounded bg-gray-50">
          <strong>Tecnologia selecionada:</strong>
          <div className="mt-2">{selecionada}</div>
          <div className="text-sm text-gray-700 mt-2">
            {tecnologias.find((t) => t.title === selecionada)?.description}
          </div>
        </div>
      </section>

      
      <section>
        <h2 className="text-xl font-semibold mb-4">Lista de Tarefas</h2>

        <div className="flex gap-2 mb-4">
          <label htmlFor="nova-tarefa" className="sr-only">Nova tarefa</label>
          <input
            id="nova-tarefa"
            className="flex-1 p-2 border rounded"
            type="text"
            placeholder="Nova tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Inserir
          </button>
        </div>

        <ul className="space-y-2">
          {tarefas.map((t) => (
            <li key={t.id} className="flex items-center justify-between p-2 border rounded">
              <div className="flex-1">
                {editandoId === t.id ? (
                  <input
                    className="p-2 border rounded w-full"
                    value={valorEdit}
                    onChange={(e) => setValorEdit(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit(t.id)}
                  />
                ) : (
                  <span>{t.title}</span>
                )}
              </div>

              <div className="flex gap-2 ml-4">
                {editandoId === t.id ? (
                  <>
                    <button
                      onClick={() => saveEdit(t.id)}
                      className="px-3 py-1 bg-green-600 text-white rounded"
                    >
                      Salvar
                    </button>
                    <button onClick={cancelEdit} className="px-3 py-1 bg-gray-400 text-white rounded">
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(t)} className="px-3 py-1 bg-yellow-500 text-white rounded">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(t.id)} className="px-3 py-1 bg-red-600 text-white rounded">
                      Apagar
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

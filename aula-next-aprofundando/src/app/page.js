"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    console.log("Número de tarefas: ", tarefas.length);
  }, [tarefas]);

  function adicionarTarefa() {
    setTarefas([...tarefas, tarefa]);
    setTarefa("");
  }

  function removerTarefa(index) {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== index);
    setTarefas(tarefasAtualizadas);
  }

  return (
    <section>
      <h1> Lista de Tarefas </h1>

      <input type="text" 
      value={tarefa} 
      onChange={(e) => setTarefa(e.target.value)} 
      placeholder="Digite uma tarefa"/>
      <button onClick={adicionarTarefa}> Adicionar </button>

      <ul>
        {tarefas.map((t, index) =>
          <li key={index}> 
            {t}
            <button onClick={() => removerTarefa(index)}>Remover</button> 
          </li>
        )}
      </ul>

    </section>
  );
}

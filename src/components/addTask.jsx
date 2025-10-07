import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <Input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite o título da Tarefa"
      />
      <Input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descrição da Tarefa"
      />
      <button
        className="w-full bg-slate-500 rounded-md px-4 py-2 text-white font-medium"
        onClick={() => {
          // Verificar se o título e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa!");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

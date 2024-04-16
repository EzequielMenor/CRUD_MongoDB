"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('El título y la descripción son obligatorios.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description })
      });

      if (res.ok) {
        router.refresh();
        router.push('/');
      } else {
        throw new Error("Fallo al crear el tema");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input onChange={(e) => setTitle(e.target.value)} value={title} className="custom-border" type="text" placeholder="Titulo del Tema" />
        <input onChange={(e) => setDescription(e.target.value)} value={description} className="custom-border" type="text" placeholder="Descripción del tema" />

        <div className="flex">
          <button type="submit" className="custom-style">
            Añadir Tema
          </button>
          <a href="/" className="custom-style-red">
            Cancelar
          </a>
        </div>
      </form>
    </>
  )
}

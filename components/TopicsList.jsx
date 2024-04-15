import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Error al buscar topics')
    }

    return res.json();
  } catch (error) {
    console.log("Error al cargar topics: ", error);
  }
}

export default async function TopicsList() {

  const { topics } = await getTopics();

  return (
    <>
      {topics.map(t => (
        <div key={t._id} className="p-4 border border-gray-300 rounded-lg my-3 flex justify-between items-start">
          <div>
            <h2 className="font-bold text-xl mb-2">{t.title}</h2>
            <div className="text-gray-600">{t.description}</div>
          </div>

          <div className="flex items-center gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`} className="text-blue-600 hover:text-blue-700">
                <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>

  );
}
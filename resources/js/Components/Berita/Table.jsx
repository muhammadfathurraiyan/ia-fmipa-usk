import { Eye, PencilLine, Trash } from "lucide-react";
import { useState } from "react";
import Dialog from "./Dialog";
import { Link } from "@inertiajs/react";
import { buttonClass } from "../ui/button";

export default function Table({ berita }) {
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({});
  console.log(berita);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsCreate(true)}
        className={buttonClass.primary}
      >
        Tambah
      </button>
      <div className="relative overflow-x-auto rounded-t">
        <table className="w-full text-sm text-center ">
          <thead className="text-xs uppercase bg-sky-950 text-neutral-100 ">
            <tr>
              <th className="p-3">No</th>
              <th className="p-3">Judul</th>
              <th className="p-3">ID</th>
              <th className="p-3">Kategori</th>
              <th className="p-3">Konten</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {berita?.map((berita, index) => (
              <tr key={berita.id} className="border-b border-neutral-400">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{berita.title}</td>
                <td className="p-3">{berita.id}</td>
                <td className="p-3">{berita.category}</td>
                <td className="p-3 flex items-center justify-center">
                  <p className="line-clamp-3  w-[300px]">{berita.content}</p>
                </td>
                <td className="p-3">
                  {new Date(berita.updated_at).toDateString()}
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-3 h-full">
                    <Link
                      href={`/berita/${berita.id}`}
                      className="hover:text-sky-600 transition-all"
                    >
                      <Eye size={22} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEdit(true);
                        setData(berita);
                      }}
                      className="hover:text-green-600 transition-all"
                    >
                      <PencilLine size={22} />
                    </button>
                    <Link
                      as="button"
                      method="delete"
                      href={`/berita/delete/${berita.id}`}
                      className="hover:text-red-600 transition-all"
                    >
                      <Trash size={22} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Dialog
        isCreate={isCreate}
        setIsCreate={setIsCreate}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        berita={data}
      />
    </>
  );
}

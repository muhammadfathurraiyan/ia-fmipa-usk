import { PencilLine, Trash } from "lucide-react";
import { useState } from "react";
import Dialog from "./Dialog";
import { Link } from "@inertiajs/react";
import { buttonClass } from "../ui/button";

export default function Table({ users }) {
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({});
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
              <th className="p-3">Nama</th>
              <th className="p-3">Email</th>
              {/* <th className="p-3">ID</th> */}
              <th className="p-3">Roles</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id} className="border-b border-neutral-400">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                {/* <td className="p-3">{user.id}</td> */}
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  {new Date(user.updated_at).toDateString()}
                </td>
                <td className="p-3 grid grid-flow-col">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEdit(true);
                      setData(user);
                    }}
                    className="hover:text-green-600 transition-all"
                  >
                    <PencilLine size={22} />
                  </button>
                  <Link as="button" method="delete" href={`/admin/delete/${user.id}`} className="hover:text-red-600 transition-all">
                    <Trash size={22} />
                  </Link>
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
        user={data}
      />
    </>
  );
}

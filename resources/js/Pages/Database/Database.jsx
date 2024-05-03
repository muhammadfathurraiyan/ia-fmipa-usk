import Card from "@/Components/Database/Card";
import Dialog from "@/Components/Database/Dialog";
import Searchbox from "@/Components/Database/Searchbox";
import Selectoption from "@/Components/Database/Selectoption";
import { buttonClass } from "@/Components/ui/button";
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";
import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function Database({ auth, data }) {
  const [isCreate, setIsCreate] = useState(false);
  const [database, setDatabase] = useState(data);
  if (auth.user) {
    return (
      <Layout auth={auth}>
        <Head title="Database" />
        <section className="my-12">
          <Searchbox database={database} setDatabase={setDatabase} />
          <div className="flex justify-between items-center mt-2">
            <button
              type="button"
              onClick={() => setIsCreate(true)}
              className={buttonClass.primary + " flex items-center gap-1"}
            >
              <Plus size={14} /> Alumni
            </button>
            <div>
              <select className="border-none focus:ring-0 text-sm">
                <option value="1">Jurusan</option>
                <option value="informatika">Informatika</option>
                <option value="matematika">Matematika</option>
                <option value="fisika">Fisika</option>
                <option value="statistika">Statistika</option>
              </select>
              <select
                defaultValue="1"
                className="border-none focus:ring-0 text-sm"
              >
                <option value="1">Tahun Angkatan</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
              <select className="border-none focus:ring-0 text-sm">
                <option value="1">Tahun Lulusan</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-4 max-lg:grid-cols-3">
            {database.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                angkatan={data.angkatan}
                img={data.image}
                lulusan={data.lulusan}
                name={data.name}
                prodi={data.prodi}
              />
            ))}
          </div>
        </section>
        <Dialog isCreate={isCreate} setIsCreate={setIsCreate} />
      </Layout>
    );
  }

  return (
    <Layout auth={auth}>
      <Head title="Database" />
      <section className="my-12">
        <Searchbox database={database} setDatabase={setDatabase} />
        <Selectoption database={database} setDatabase={setDatabase} />
        <div className="grid grid-cols-6 gap-4 mt-4 max-lg:grid-cols-3">
          {database.length > 0
            ? database.map((data) => (
                <Card
                  key={data.id}
                  id={data.id}
                  angkatan={data.angkatan}
                  img={data.image}
                  lulusan={data.lulusan}
                  name={data.name}
                  prodi={data.prodi}
                />
              ))
            : "Tidak ditemukan"}
        </div>
      </section>
    </Layout>
  );
}

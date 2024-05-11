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
            <Selectoption
              database={database}
              setDatabase={setDatabase}
            />
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

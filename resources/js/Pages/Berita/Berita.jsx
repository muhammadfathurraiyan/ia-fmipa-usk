import Card from "@/Components/Berita/Card";
import MiniCard from "@/Components/Berita/MiniCard";
import Table from "@/Components/Berita/Table";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
export default function Berita({ auth, berita }) {
  if (auth.user) {
    return (
      <Layout auth={auth}>
        <Head title="Berita" />
        <section className="my-12">
          <h1 className="text-3xl font-bold uppercase">Berita Admin</h1>
          <p className="-mt-1">
            Ini adalah halaman untuk melakukan proses manajemen berita.
          </p>
          <div className="mt-4 space-y-2">
            <Table berita={berita} />
          </div>
        </section>
      </Layout>
    );
  }

  const cardContent = berita
    .filter((berita) => berita.category === "berita")
    .slice(0, 3);
  const miniCardContent = berita
    .filter((berita) => berita.category === "berita")
    .slice(3, berita.length);

  return (
    <Layout auth={auth}>
      <Head title="Berita" />
      <section className="my-12 space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {cardContent.map((berita, i) => (
            <Card
              key={berita.id}
              category={berita.category}
              id={berita.id}
              content={berita.content}
              img={berita.image}
              title={berita.title}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {miniCardContent.map((berita, i) => (
            <MiniCard
              key={berita.id}
              id={berita.id}
              img={berita.image}
              title={berita.title}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

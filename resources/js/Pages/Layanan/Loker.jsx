import Card from "@/Components/Berita/Card";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Loker({ auth, berita }) {
  return (
    <Layout auth={auth}>
      <Head title="Lowongan Pekerjaan" />
      <section className="my-12 space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {berita.map((berita, i) => (
            <Card
              key={berita.id}
              category="layanan/lowongan-pekerjaan"
              id={berita.id}
              content={berita.content}
              img={berita.image}
              title={berita.title}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

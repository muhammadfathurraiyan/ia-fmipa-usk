import MiniCard from "@/Components/Berita/MiniCard";
import { buttonClass } from "@/Components/ui/button";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Detail({ auth, berita, beritaTerbaru }) {
  return (
    <Layout auth={auth}>
      <Head title={berita.title} />
      <h1 className="text-3xl font-bold mt-12 mb-8">{berita.title}</h1>
      <article className="mb-12 grid grid-cols-5 gap-20">
        <div className="col-span-3 max-lg:col-span-5">
          <img src={berita.image} alt="image" className="w-full" />
          <p className="mt-4 text-lg  whitespace-pre-wrap text-justify">
            {berita.content}
          </p>
        </div>
        <div className="col-span-2 max-lg:col-span-5 space-y-2">
          <h1 className="text-xl font-bold">Berita Lainya</h1>
          {beritaTerbaru.map((berita) => (
            <MiniCard
              id={berita.id}
              img={berita.image}
              title={berita.title}
              key={berita.id}
            />
          ))}
        </div>
      </article>
    </Layout>
  );
}

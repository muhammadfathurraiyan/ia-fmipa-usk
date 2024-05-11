import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Detail({ auth, loker, lokerTerbaru }) {
  return (
    <Layout auth={auth}>
      <Head title={loker.title} />
      <h1 className="text-3xl font-bold mt-12 mb-8">{loker.title}</h1>
      <article className="mb-12 grid grid-cols-5 gap-20">
        <div className="col-span-3 max-lg:col-span-5">
          <img src={loker.image} alt="image" className="w-full" />
          <p className="mt-4 text-lg  whitespace-pre-wrap text-justify">
            {loker.content}
          </p>
        </div>
        <div className="col-span-2 max-lg:col-span-5 space-y-2">
          <h1 className="text-xl font-bold">Loker Lainnya</h1>
          {lokerTerbaru.map((loker) => (
            <MiniCard
              id={loker.id}
              img={loker.image}
              title={loker.title}
              key={loker.id}
            />
          ))}
        </div>
      </article>
    </Layout>
  );
}

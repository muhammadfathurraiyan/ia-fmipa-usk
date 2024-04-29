import { buttonClass } from "@/Components/ui/button";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Detail({ auth, berita }) {
  console.log(berita);
  const konten = berita[0];
  return (
    <Layout auth={auth}>
      <Head title={konten.title} />
      <article className="my-12 w-3/5">
        <h1 className="text-3xl font-bold uppercase">{konten.title}</h1>
        <img src={konten.image} alt="image" className="w-full" />
        <p className="mt-4 text-lg">
          {konten.content}
        </p>
        <p className={buttonClass.secondary + " w-fit uppercase mt-4"}>{konten.category}</p>
      </article>
    </Layout>
  );
}

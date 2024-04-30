import { buttonClass } from "@/Components/ui/button";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Sejarah({ auth, berita }) {
  return (
    <Layout auth={auth}>
      <Head title={berita.title} />
      <article className="my-12 w-3/5">
        <h1 className="text-3xl font-bold uppercase">{berita.title}</h1>
        <img src={berita.image} alt="image" className="w-full" />
        <p className="mt-4 text-lg whitespace-pre-wrap">{berita.content}</p>
        <p className={buttonClass.secondary + " w-fit uppercase mt-4"}>
          {berita.category}
        </p>
      </article>
    </Layout>
  );
}

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

  <Layout auth={auth}>
    <Head title="Berita" />
    <section className="my-12">
      <h1 className="text-3xl font-bold uppercase">Berita Admin</h1>
      <p className="-mt-1">
        Ini adalah halaman untuk melakukan proses manajemen berita.
      </p>
      <div className="mt-4 space-y-4">
        <Table users={users} />
      </div>
    </section>
  </Layout>;
}

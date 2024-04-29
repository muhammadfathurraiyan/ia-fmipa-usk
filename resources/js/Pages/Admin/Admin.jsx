import Table from "@/Components/Admin/Table";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
export default function Admin({ auth, users }) {
  return (
    <Layout auth={auth}>
      <Head title="Admin" />
      <section className="my-12">
        <h1 className="text-3xl font-bold uppercase">Manajemen Admin</h1>
        <p className="-mt-1">
          Ini adalah halaman untuk melakukan proses manajemen admin.
        </p>
        <div className="mt-4 space-y-4">
          <Table users={users} />
        </div>
      </section>
    </Layout>
  );
}

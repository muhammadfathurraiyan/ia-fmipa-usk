import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";
import Layanan from "../../../../public/img/Layanan.png";
import { buttonClass } from "@/Components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ULT({ auth }) {
  return (
    <Layout auth={auth}>
      <Head title="Unit layanan terpadu" />
      <article className="my-12 space-y-6">
        <h1 className="text-4xl font-bold uppercase">
          Pelayanan Legalisir Ijazah, Transkrip Akademik dan Akreditasi
        </h1>
        <div className="flex items-center gap-4 mt-1">
          <Link href="" className={buttonClass.secondary + " w-fit"}>
            <span className="flex items-end justify-between gap-4">
              Ajukan Secara Online
              <ExternalLink className="lg:hidden mb-1" size={20} />
            </span>
          </Link>
          <Link href="" className={buttonClass.secondary + " w-fit"}>
            <span className="flex items-end justify-between gap-4">
              Ajukan Secara Offline
              <ExternalLink className="lg:hidden mb-1" size={20} />
            </span>
          </Link>
        </div>
        <div className="flex justify-between gap-6">
          <img src={Layanan} alt="image" className="w-3/5" />
          <div className="space-y-4">
            <div className="rounded-3xl p-4 bg-sky-950 text-yellow-500 text-sm">
              <h2>Persyaratan Umum</h2>
              <ul className="list-inside list-disc">
                <li>Lembar asli ijazah, trankskrip akademik, akreditasi</li>
                <li>
                  Fotokopi dokumen legalisir{" "}
                  {"(ijazah, transkrip akademik, akreditasi)"}
                </li>
                <li>Slip pembayaran</li>
              </ul>
            </div>
            <div className="rounded-3xl p-4 bg-sky-950 text-yellow-500 text-sm">
              <ul className="">
                <li>Jangka waktu penyelesaian : 3 Hari Kerja</li>
                <li>
                  Biaya : Rp. 2000/lembar {"(S1)"} & Rp. 5000/lembar {"(S2)"}
                </li>
                <li>
                  Produk layanan: Lembar fotokopi ijazah/transkrip
                  akademik/akreditasi yang telah di legalisir
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

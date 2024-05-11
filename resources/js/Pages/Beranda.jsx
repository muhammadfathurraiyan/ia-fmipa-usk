import Slider from "@/Components/Beranda/Slider";
import MiniCard from "@/Components/Berita/MiniCard";
import { buttonClass } from "@/Components/ui/button";
import Layout from "@/Layouts/Layout";
import { Link, Head } from "@inertiajs/react";
import { ExternalLink } from "lucide-react";

export default function Beranda({ auth, berita }) {
  return (
    <Layout auth={auth}>
      <Head title="Beranda" />

      <div className="grid lg:grid-cols-2 gap-6 my-12">
        <div className="relative h-[54.5vh] max-lg:w-[91vw]  flex items-center justify-center group">
          <Slider data={berita.slice(0, 3)} />
        </div>
        <div className="grid gap-4">
          {berita.slice(3, berita.length).map((berita) => (
            <MiniCard
              key={berita.id}
              id={berita.id}
              img={berita.image}
              title={berita.title}
            />
          ))}
        </div>
        <article className="space-y-2">
          <h1 className="text-xl font-semibold">
            Sejarah Ikatan Alumni Fakultas MIPA USK
          </h1>
          <p className="line-clamp-3">
            Ikatan Alumni Fakultas Matematika dan Ilmu Pengetahuan Alam
            Universitas Syiah Kuala (IKA FMIPA USK) terbentuk dengan tujuan
            utama untuk mempertemukan dan menjaga hubungan yang baik antara
            alumni dan almamater di tingkat fakultas.
          </p>
          <Link
            href={route('sejarah')}
            className="underline font-medium hover:text-red-500 transition-all"
          >
            Baca Selengkapnya
          </Link>
        </article>
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">
            Pelayanan Legalisir Ijazah, Transkrip Akademik, dan Akreditasi
          </h1>
          <div className="flex lg:items-center max-lg:flex-col justify-between gap-2">
            <a href="https://ult.fmipa.usk.ac.id/assets/img/layanan/akademik/leges-ijazah.jpg" target="_blank" className={buttonClass.secondary + " w-fit"}>
              <span className="flex items-end justify-between gap-4">
                Lihat Alur
                <ExternalLink className="lg:hidden mb-1" size={20} />
              </span>
            </a>
            <a href="https://ult.fmipa.usk.ac.id/leges/masuk" target="_blank" className={buttonClass.secondary + " w-fit"}>
              <span className="flex items-end justify-between gap-4">
                Ajukan Secara Online
                <ExternalLink className="lg:hidden mb-1" size={20} />
              </span>
            </a>
            <a href="https://ult.fmipa.usk.ac.id/pengajuan/form_layanan" target="_blank" className={buttonClass.secondary + " w-fit"}>
              <span className="flex items-end justify-between gap-4">
                Ajukan Secara Offline
                <ExternalLink className="lg:hidden mb-1" size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

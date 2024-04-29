import Layout from "@/Layouts/Layout";
import Logo from "../../../public/img/logo.png";
import { Head } from "@inertiajs/react";
import {
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Kontak({ auth }) {
  return (
    <Layout auth={auth}>
      <Head title="Kontak" />
      <section className="space-y-8 min-h-[60vh] my-12">
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="logo ia-fmipa-usk"
            className="size-[150px] max-lg:size-[100px]"
          />
          <h1 className="font-semibold text-5xl max-lg:text-3xl">
            Ikatan Alumni <br /> Fakultas MIPA USK
          </h1>
        </div>
        <div className="lg:flex gap-44 space-y-4 items-start">
          <p className="text-lg">
            Gedung A FMIPA USK Lantai 1 <br />
            Kopelma Darussalam, Kec. Syiah Kuala <br />
            Banda Aceh, Aceh 2311
          </p>
          <div className="space-y-2">
            <p className="text-lg">Follow us:</p>
            <div className="flex items-center gap-8 text-neutral-500">
              <Facebook className="hover:text-neutral-950 transition-all" />
              <Twitter className="hover:text-neutral-950 transition-all" />
              <Instagram className="hover:text-neutral-950 transition-all" />
              <Dribbble className="hover:text-neutral-950 transition-all" />
              <Youtube className="hover:text-neutral-950 transition-all" />
              <Linkedin className="hover:text-neutral-950 transition-all" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg">Email : emailikfmipa@usk.ac.id</p>
          <p className="text-lg">Telpon : {"(0651)-1182-2133"}</p>
        </div>
      </section>
    </Layout>
  );
}

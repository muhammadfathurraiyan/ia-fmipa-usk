import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import gedungmipa from "../../../../public/img/fmipa_fakultas.jpeg";

export default function ProfilePimpinan({ auth }) {
  return (
    <Layout auth={auth}>
    <Head title="Profil Pimpinan" />
    <article className="my-12 w-full">
      <h1 className="text-3xl font-bold uppercase">
        SEJARAH IKATAN ALUMNI FAKULTAS MIPA UNIVERSITAS SYIAH KUALA
      </h1>
      <div>
        <img
          src={gedungmipa}
          alt="image"
          className="w-full h-[60vh] object-cover"
        />
        <p className="mt-4 text-lg text-justify whitespace-pre-wrap">
          Ikatan Alumni Fakultas Matematika dan Ilmu Pengetahuan Alam
          Universitas Syiah Kuala (IKA FMIPA USK) terbentuk dengan tujuan
          utama untuk mempertemukan dan menjaga hubungan yang baik antara
          alumni dan almamater di tingkat fakultas. IKA FMIPA USK menjadi
          tulang punggung dalam membina komunikasi, kolaborasi, dan kontribusi
          para alumni terhadap perkembangan fakultas dan perguruan tinggi
          secara keseluruhan. Sejarah pembentukan IKA FMIPA USK mencerminkan
          kepedulian yang mendalam terhadap pengembangan sumber daya manusia
          di bidang ilmu pengetahuan dan teknologi di Aceh.<br /> <br />Selama
          perjalanannya, IKA FMIPA USK telah mengalami berbagai perubahan dan
          perkembangan yang signifikan. Mulai dari pengembangan program
          kegiatan yang lebih beragam dan relevan, restrukturisasi organisasi
          untuk meningkatkan efisiensi dan efektivitas, hingga berbagai upaya
          untuk meningkatkan kualitas dan kuantitas keanggotaan. Melalui
          berbagai program dan kegiatan yang diselenggarakan, IKA FMIPA USK
          tidak hanya menjadi sarana bagi para alumni untuk saling terhubung
          dan berbagi pengalaman, tetapi juga menjadi wadah untuk mendorong
          kolaborasi antara alumni dan almamater dalam berbagai bidang,
          seperti pendidikan, penelitian, dan pengabdian kepada masyarakat.
          Selain itu, IKA FMIPA USK juga menjadi agen perubahan yang berperan
          dalam memajukan ilmu pengetahuan dan teknologi di Aceh melalui
          kontribusi aktif dari para alumni yang berpengalaman dan
          berkualitas. Dengan demikian, perjalanan dan perkembangan IKA FMIPA
          USK tidak hanya mencerminkan komitmen yang kuat terhadap
          pengembangan sumber daya manusia dan kemajuan ilmu pengetahuan di
          Aceh, tetapi juga menjadi cerminan dari semangat dan dedikasi para
          alumni FMIPA USK dalam menjaga hubungan yang erat dengan almamater
          dan berkontribusi secara positif terhadap perkembangan fakultas dan
          perguruan tinggi.
        </p>
      </div>
    </article>
  </Layout>
  );
}

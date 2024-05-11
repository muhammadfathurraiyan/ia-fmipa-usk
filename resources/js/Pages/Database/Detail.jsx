import Dialog from "@/Components/Database/Dialog";
import { buttonClass } from "@/Components/ui/button";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { PenLine } from "lucide-react";
import { useState } from "react";
import Profile from "../../../../public/img/profile.jpg";

export default function Detail({ auth, data }) {
  const [isEdit, setIsEdit] = useState(false);
  if (auth.user) {
    return (
      <Layout auth={auth}>
        <Head title={data.title} />
        <article className="my-12 flex max-lg:flex-col gap-4 lg:gap-8">
          <div className="h-[65vh] w-[30vw] max-lg:w-full">
            <img
              src={data.image ?? Profile}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full">
            <div className="flex max-lg:flex-col justify-between lg:items-center w-full">
              <h1 className="font-bold text-5xl">{data.name}</h1>
              <button
                className={
                  buttonClass.primary +
                  " flex items-center gap-2 h-fit max-lg:-order-1 w-fit"
                }
                onClick={() => setIsEdit(true)}
                type="button"
              >
                Sunting <PenLine size={14} />
              </button>
            </div>
            <p className="italic text-2xl font-light">
              {"(" + data.title ? data.title : "" + ")"}
            </p>

            <div className="text-2xl my-2 -space-y-1">
              <p>Program Studi {data.prodi}</p>
              <p>Angkatan tahun {data.angkatan}</p>
              <p>Lulusan tahun {data.lulusan}</p>
              <p>Lulusan NPM {data.npm}</p>
            </div>

            <div className="text-lg font-light -space-y-1">
              <p>Telepon: {data.telepon}</p>
              <p>Email: {data.email}</p>
              <p>Sosial Media: {data.sosmed}</p>
              <p>Instagram: {data.instagram}</p>
              <p>Linkedin: {data.linkedin}</p>
              <p>Twitter: {data.twitter}</p>
              <p>Lainya: {data.other}</p>
            </div>

            <div className="text-lg font-light mt-2 -space-y-1">
              <p>Deskripsi:</p>
              <p>{data.description}</p>
            </div>
          </div>
        </article>
        <Dialog isEdit={isEdit} setIsEdit={setIsEdit} database={data} />
      </Layout>
    );
  }
  return (
    <Layout auth={auth}>
      <Head title={data.title} />
      <article className="my-12 flex max-lg:flex-col gap-4 lg:gap-8">
        <div className="h-[65vh] w-[30vw] max-lg:w-full">
          <img
            src={data.image ?? Profile}
            alt="image"
            className="min-h-full w-full object-cover"
          />
        </div>
        <div className="w-full">
          <h1 className="font-bold text-5xl">{data.name}</h1>
          <p className="italic text-2xl font-light">{"(" + data.title + ")"}</p>

          <div className="text-2xl my-2 -space-y-1">
            <p>Program Studi {data.prodi}</p>
            <p>Angkatan tahun {data.angkatan}</p>
            <p>Lulusan tahun {data.lulusan}</p>
          </div>

          <div className="text-lg font-light -space-y-1">
            <p>Telepon: {data.telepon}</p>
            <p>Email: {data.email}</p>
            <p>Sosial Media: {data.sosmed}</p>
          </div>

          <div className="text-lg font-light mt-2 -space-y-1">
            <p>Deskripsi:</p>
            <p>{data.description}</p>
          </div>
        </div>
      </article>
    </Layout>
  );
}

import { useEffect, useState } from "react";
import Modal from "../Modal";
import ImageInput, { Input, InputError } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "@inertiajs/react";

export default function Dialog({
  isCreate,
  setIsCreate,
  setIsEdit,
  isEdit,
  berita,
}) {
  if (isCreate) {
    const { data, setData, post, processing, errors, reset } = useForm({
      title: "",
      category: "berita",
      content: "",
      img: "",
    });

    const submit = (e) => {
      e.preventDefault();
      post(route("berita.store"));
      setIsCreate(false);
    };
    return (
      <Modal
        closeable
        maxWidth="2xl"
        show={isCreate}
        onClose={() => setIsCreate(false)}
      >
        <div className="relative p-4">
          <form onSubmit={submit}>
            <h2 className="font-semibold text-xl">Form Tambah Berita</h2>
            <div>
              <label htmlFor="title" className="text-xs font-medium">
                Judul
              </label>
              <Input
                id="title"
                name="title"
                type="text"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                required
              />
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
              <label htmlFor="category" className="text-xs font-medium">
                Kategori
              </label>
              <select
                name="category"
                id="category"
                className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                value={data.category}
                onChange={(e) => setData("category", e.target.value)}
              >
                <option value="berita">Berita</option>
                <option value="loker">Loker</option>
              </select>
            </div>
            <ImageInput value={data.img} setData={setData} />
            <InputError message={errors.email} className="mt-2" />
            <div>
              <label htmlFor="content" className="text-xs font-medium">
                Konten
              </label>
              <textarea
                id="content"
                name="content"
                value={data.content}
                rows={5}
                onChange={(e) => setData("content", e.target.value)}
                className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
              />
              <InputError message={errors.content} className="mt-2" />
            </div>
            <div className="flex justify-end mt-4">
              <Button variants={"secondary"} disabled={processing}>
                Tambah
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }

  if (isEdit) {
    const { data, setData, patch, processing, errors, reset } = useForm({
      title: berita.title,
      content: berita.content,
      img: berita.image,
      category: berita.category,
      id: berita.id,
    });

    const submit = (e) => {
      e.preventDefault();
      patch(route("berita.update"));
      setIsEdit(false);
    };
    return (
      <Modal
        closeable
        maxWidth="2xl"
        show={isEdit}
        onClose={() => setIsEdit(false)}
      >
        <div className="relative p-4">
          <form onSubmit={submit}>
            <h2 className="font-semibold text-xl">Form Edit Berita</h2>
            <div>
              <label htmlFor="title" className="text-xs font-medium">
                Judul
              </label>
              <Input
                id="title"
                name="title"
                type="text"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                required
              />
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
              <label htmlFor="category" className="text-xs font-medium">
                Kategori
              </label>
              <select
                name="category"
                id="category"
                className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                value={data.category}
                onChange={(e) => setData("category", e.target.value)}
              >
                <option value="berita">Berita</option>
                <option value="loker">Loker</option>
              </select>
            </div>
            <ImageInput value={data.img} setData={setData} />
            <InputError message={errors.email} className="mt-2" />
            <div>
              <label htmlFor="content" className="text-xs font-medium">
                Konten
              </label>
              <textarea
                id="content"
                name="content"
                value={data.content}
                rows={5}
                onChange={(e) => setData("content", e.target.value)}
                className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
              />
              <InputError message={errors.content} className="mt-2" />
            </div>
            <div className="flex justify-end mt-4">
              <Button variants={"secondary"} disabled={processing}>
                Edit
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

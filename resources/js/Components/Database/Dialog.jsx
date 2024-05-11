import Modal from "../Modal";
import ImageInput, { Input, InputError } from "../ui/input";
import { Button, buttonClass } from "../ui/button";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Dialog({
  isCreate,
  setIsCreate,
  setIsEdit,
  isEdit,
  database,
}) {
  if (isCreate) {
    const dateArray = [];
    for (let i = 1989; i <= 2030; i++) {
      dateArray.push(i);
    }
    const { data, setData, post, processing, errors, reset } = useForm({
      name: "",
      npm: "",
      title: "",
      prodi: "",
      angkatan: "",
      lulusan: "",
      telepon: "",
      email: "",
      instagram: "",
      linkedin: "",
      twitter: "",
      other: "",
      description: "",
      img: "",
    });

    const submit = (e) => {
      e.preventDefault();
      post(route("database.store"));
      setIsCreate(false);
    };
    return (
      <Modal
        closeable
        maxWidth="3xl"
        show={isCreate}
        onClose={() => setIsCreate(false)}
      >
        <div className="relative p-4">
          <form onSubmit={submit}>
            <h2 className="font-semibold text-xl">Form Tambah Alumni</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div>
                  <label htmlFor="name" className="text-xs font-medium">
                    Nama
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="npm" className="text-xs font-medium">
                    NPM
                  </label>
                  <Input
                    id="npm"
                    name="npm"
                    type="number"
                    value={data.npm}
                    onChange={(e) => setData("npm", e.target.value)}
                  />
                  <InputError message={errors.npm} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="title" className="text-xs font-medium">
                    Gelar
                  </label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <ImageInput value={data.img} setData={setData} />
              </div>
              <div>
                <div>
                  <label htmlFor="prodi" className="text-xs font-medium">
                    Program Studi
                  </label>
                  <select
                    name="prodi"
                    id="prodi"
                    className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                    value={data.prodi}
                    onChange={(e) => setData("prodi", e.target.value)}
                    required
                  >
                    <option value="">Pilih Jurusan</option>
                    <option value="D3 Teknik Elektronika">
                      D3 Teknik Elektronika
                    </option>
                    <option value="D3 Manajemen Informatika">
                      D3 Manajemen Informatika
                    </option>
                    <option value="Biologi">Biologi</option>
                    <option value="Farmasi">Farmasi</option>
                    <option value="Kimia">Kimia</option>
                    <option value="Informatika">Informatika</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Statistika">Statistika</option>
                    <option value="S2 Biologi">S2 Biologi</option>
                    <option value="S2 Fisika">S2 Fisika</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="angkatan" className="text-xs font-medium">
                    Angkatan
                  </label>
                  <select
                    id="angkatan"
                    name="angkatan"
                    type="text"
                    className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                    value={data.angkatan}
                    onChange={(e) => setData("angkatan", e.target.value)}
                    required
                  >
                    <option value="">Pilih Angkatan</option>
                    {dateArray.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                  <InputError message={errors.angkatan} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="lulusan" className="text-xs font-medium">
                    Lulusan
                  </label>
                  <select
                    id="lulusan"
                    name="lulusan"
                    type="text"
                    className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                    value={data.lulusan}
                    onChange={(e) => setData("lulusan", e.target.value)}
                  >
                    <option value="">Pilih Tahun Lulusan</option>
                    {dateArray.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                  <InputError message={errors.lulusan} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="telepon" className="text-xs font-medium">
                    Telepon
                  </label>
                  <Input
                    id="telepon"
                    name="telepon"
                    type="text"
                    value={data.telepon}
                    onChange={(e) => setData("telepon", e.target.value)}
                  />
                  <InputError message={errors.telepon} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="instagram" className="text-xs font-medium">
                    Instagram
                  </label>
                  <Input
                    id="instagram"
                    name="instagram"
                    type="text"
                    value={data.instagram}
                    onChange={(e) => setData("instagram", e.target.value)}
                  />
                  <InputError message={errors.instagram} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="linkedin" className="text-xs font-medium">
                    Linkedin
                  </label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    value={data.linkedin}
                    onChange={(e) => setData("linkedin", e.target.value)}
                  />
                  <InputError message={errors.linkedin} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="twitter" className="text-xs font-medium">
                    Twitter
                  </label>
                  <Input
                    id="twitter"
                    name="twitter"
                    type="text"
                    value={data.twitter}
                    onChange={(e) => setData("twitter", e.target.value)}
                  />
                  <InputError message={errors.twitter} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="other" className="text-xs font-medium">
                    Lainya
                  </label>
                  <Input
                    id="other"
                    name="other"
                    type="text"
                    value={data.other}
                    onChange={(e) => setData("other", e.target.value)}
                  />
                  <InputError message={errors.other} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="description" className="text-xs font-medium">
                    Deskripsi
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={data.description}
                    rows={5}
                    onChange={(e) => setData("description", e.target.value)}
                    className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                  />
                  <InputError message={errors.description} className="mt-2" />
                </div>
              </div>
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
    const dateArray = [];
    for (let i = 1989; i <= 2030; i++) {
      dateArray.push(i);
    }
    const [isDelete, setIsDelete] = useState(false);
    const { data, setData, patch, processing, errors, reset } = useForm({
      name: database.name,
      npm: database.npm,
      title: database.title,
      prodi: database.prodi,
      angkatan: database.angkatan,
      lulusan: database.lulusan,
      telepon: database.telepon,
      email: database.email,
      instagram: database.instagram,
      linkedin: database.linkedin,
      twitter: database.twitter,
      other: database.email,
      description: database.description,
      img: database.image,
      id: database.id,
    });

    const submit = (e) => {
      e.preventDefault();
      patch(route("database.update"));
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
            <h2 className="font-semibold text-xl">Form Edit Alumni</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div>
                  <label htmlFor="name" className="text-xs font-medium">
                    Nama
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="npm" className="text-xs font-medium">
                    NPM
                  </label>
                  <Input
                    id="npm"
                    name="npm"
                    type="number"
                    value={data.npm}
                    onChange={(e) => setData("npm", e.target.value)}
                  />
                  <InputError message={errors.npm} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="title" className="text-xs font-medium">
                    Gelar
                  </label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <ImageInput value={data.img} setData={setData} />
              </div>
              <div>
                <div>
                  <label htmlFor="prodi" className="text-xs font-medium">
                    Program Studi
                  </label>
                  <select
                    name="prodi"
                    id="prodi"
                    className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                    value={data.prodi}
                    onChange={(e) => setData("prodi", e.target.value)}
                    required
                  >
                    <option value="">Pilih Jurusan</option>
                    <option value="D3 Teknik Elektronika">
                      D3 Teknik Elektronika
                    </option>
                    <option value="D3 Manajemen Informatika">
                      D3 Manajemen Informatika
                    </option>
                    <option value="Biologi">Biologi</option>
                    <option value="Farmasi">Farmasi</option>
                    <option value="Kimia">Kimia</option>
                    <option value="Informatika">Informatika</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Statistika">Statistika</option>
                    <option value="S2 Biologi">S2 Biologi</option>
                    <option value="S2 Fisika">S2 Fisika</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="angkatan" className="text-xs font-medium">
                    Angkatan
                  </label>
                  <select
                    id="angkatan"
                    name="angkatan"
                    type="text"
                    className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                    value={data.angkatan}
                    onChange={(e) => setData("angkatan", e.target.value)}
                    required
                  >
                    <option value="">Pilih Angkatan</option>
                    {dateArray.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                  <InputError message={errors.angkatan} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="lulusan" className="text-xs font-medium">
                    Lulusan
                  </label>
                  <select
                    id="lulusan"
                    name="lulusan"
                    type="text"
                    className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                    value={data.lulusan}
                    onChange={(e) => setData("lulusan", e.target.value)}
                  >
                    <option value="">Pilih Tahun Lulusan</option>
                    {dateArray.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                  <InputError message={errors.lulusan} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="telepon" className="text-xs font-medium">
                    Telepon
                  </label>
                  <Input
                    id="telepon"
                    name="telepon"
                    type="text"
                    value={data.telepon}
                    onChange={(e) => setData("telepon", e.target.value)}
                  />
                  <InputError message={errors.telepon} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="instagram" className="text-xs font-medium">
                    Instagram
                  </label>
                  <Input
                    id="instagram"
                    name="instagram"
                    type="text"
                    value={data.instagram}
                    onChange={(e) => setData("instagram", e.target.value)}
                  />
                  <InputError message={errors.instagram} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="linkedin" className="text-xs font-medium">
                    Linkedin
                  </label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    value={data.linkedin}
                    onChange={(e) => setData("linkedin", e.target.value)}
                  />
                  <InputError message={errors.linkedin} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="twitter" className="text-xs font-medium">
                    Twitter
                  </label>
                  <Input
                    id="twitter"
                    name="twitter"
                    type="text"
                    value={data.twitter}
                    onChange={(e) => setData("twitter", e.target.value)}
                  />
                  <InputError message={errors.twitter} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="other" className="text-xs font-medium">
                    Lainya
                  </label>
                  <Input
                    id="other"
                    name="other"
                    type="text"
                    value={data.other}
                    onChange={(e) => setData("other", e.target.value)}
                  />
                  <InputError message={errors.other} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="description" className="text-xs font-medium">
                    Deskripsi
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={data.description}
                    rows={5}
                    onChange={(e) => setData("description", e.target.value)}
                    className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                  />
                  <InputError message={errors.description} className="mt-2" />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <Button
                type="button"
                onClick={() => {
                  console.log({ isDelete });
                  setIsDelete(true);
                }}
                variants={"primary"}
              >
                Hapus
              </Button>
              <Modal
                closeable
                maxWidth="sm"
                show={isDelete}
                onClose={() => setIsDelete(false)}
              >
                <div className="p-4">
                  <h2 className="text-lg font-bold">
                    Apakah anda yakin ingin menghapus data ini?
                  </h2>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button
                      type="button"
                      onClick={() => setIsDelete(false)}
                      variants={"secondary"}
                      className={" rounded"}
                    >
                      Batal
                    </Button>
                    <Link
                      as="button"
                      method="delete"
                      href={`/database/delete/${data.id}`}
                      className={buttonClass.primary}
                    >
                      Hapus
                    </Link>
                  </div>
                </div>
              </Modal>
              <Button
                variants={"secondary"}
                className={" rounded"}
                disabled={processing}
              >
                Edit
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

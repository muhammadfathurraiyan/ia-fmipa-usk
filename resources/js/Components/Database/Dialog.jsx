import Modal from "../Modal";
import ImageInput, { Input, InputError } from "../ui/input";
import { Button, buttonClass } from "../ui/button";
import { Link, useForm } from "@inertiajs/react";

export default function Dialog({
  isCreate,
  setIsCreate,
  setIsEdit,
  isEdit,
  database,
}) {
  if (isCreate) {
    const { data, setData, post, processing, errors, reset } = useForm({
      name: "",
      title: "",
      prodi: "",
      angkatan: "",
      lulusan: "",
      telepon: "",
      email: "",
      sosmed: "",
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
        maxWidth="2xl"
        show={isCreate}
        onClose={() => setIsCreate(false)}
      >
        <div className="relative p-4">
          <form onSubmit={submit}>
            <h2 className="font-semibold text-xl">Form Tambah Alumni</h2>
            <div className="grid grid-cols-2 gap-4">
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
                  <label htmlFor="title" className="text-xs font-medium">
                    Gelar
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
                <ImageInput value={data.img} setData={setData} />
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
                  >
                    <option value="Informatika">Informatika</option>
                    <option value="Manajemen Informatika">
                      Manajemen Informatika
                    </option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Statistika">Statistika</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="angkatan" className="text-xs font-medium">
                    Angkatan
                  </label>
                  <Input
                    id="angkatan"
                    name="angkatan"
                    type="text"
                    value={data.angkatan}
                    onChange={(e) => setData("angkatan", e.target.value)}
                    required
                  />
                  <InputError message={errors.angkatan} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="lulusan" className="text-xs font-medium">
                    Lulusan
                  </label>
                  <Input
                    id="lulusan"
                    name="lulusan"
                    type="text"
                    value={data.lulusan}
                    onChange={(e) => setData("lulusan", e.target.value)}
                    required
                  />
                  <InputError message={errors.lulusan} className="mt-2" />
                </div>
              </div>
              <div>
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
                    required
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
                    required
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="sosmed" className="text-xs font-medium">
                    Sosial Media
                  </label>
                  <Input
                    id="sosmed"
                    name="sosmed"
                    type="text"
                    value={data.sosmed}
                    onChange={(e) => setData("sosmed", e.target.value)}
                    required
                  />
                  <InputError message={errors.sosmed} className="mt-2" />
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
    const { data, setData, patch, processing, errors, reset } = useForm({
      name: database.name,
      title: database.title,
      prodi: database.prodi,
      angkatan: database.angkatan,
      lulusan: database.lulusan,
      telepon: database.telepon,
      email: database.email,
      sosmed: database.sosmed,
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
            <div className="grid grid-cols-2 gap-4">
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
                  <label htmlFor="title" className="text-xs font-medium">
                    Gelar
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
                <ImageInput value={data.img} setData={setData} />
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
                  >
                    <option value="Informatika">Informatika</option>
                    <option value="Manajemen Informatika">
                      Manajemen Informatika
                    </option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Statistika">Statistika</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="angkatan" className="text-xs font-medium">
                    Angkatan
                  </label>
                  <Input
                    id="angkatan"
                    name="angkatan"
                    type="text"
                    value={data.angkatan}
                    onChange={(e) => setData("angkatan", e.target.value)}
                    required
                  />
                  <InputError message={errors.angkatan} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="lulusan" className="text-xs font-medium">
                    Lulusan
                  </label>
                  <Input
                    id="lulusan"
                    name="lulusan"
                    type="text"
                    value={data.lulusan}
                    onChange={(e) => setData("lulusan", e.target.value)}
                    required
                  />
                  <InputError message={errors.lulusan} className="mt-2" />
                </div>
              </div>
              <div>
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
                    required
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
                    required
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                  <label htmlFor="sosmed" className="text-xs font-medium">
                    Sosial Media
                  </label>
                  <Input
                    id="sosmed"
                    name="sosmed"
                    type="text"
                    value={data.sosmed}
                    onChange={(e) => setData("sosmed", e.target.value)}
                    required
                  />
                  <InputError message={errors.sosmed} className="mt-2" />
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
              <Link
                as="button"
                method="delete"
                href={`/database/delete/${data.id}`}
                className={buttonClass.primary + " rounded-none"}
              >
                Hapus
              </Link>
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
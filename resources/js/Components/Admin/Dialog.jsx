import { useEffect, useState } from "react";
import Modal from "../Modal";
import { Input, InputError } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "@inertiajs/react";

export default function Dialog({
  isCreate,
  setIsCreate,
  setIsEdit,
  isEdit,
  user,
}) {
  if (isCreate) {
    const { data, setData, post, processing, errors, reset } = useForm({
      name: "",
      email: "",
      password: "",
      role: "admin",
    });

    console.log(data);

    const submit = (e) => {
      e.preventDefault();
      post(route("admin.store"));
      setIsCreate(false);
    };
    return (
      <Modal
        closeable
        maxWidth="md"
        show={isCreate}
        onClose={() => setIsCreate(false)}
      >
        <div className="relative p-4">
          <form onSubmit={submit}>
            <h2 className="font-semibold text-xl">Form Tambah Admin</h2>
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
              <label htmlFor="email" className="text-xs font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
            </div>
            <InputError message={errors.email} className="mt-2" />
            <div>
              <label htmlFor="password" className="text-xs font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
              <InputError message={errors.password} className="mt-2" />
            </div>
            <div>
              <label htmlFor="Role" className="text-xs font-medium">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                value={data.role}
                onChange={(e) => setData("role", e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="super-admin">Super Admin</option>
              </select>
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
      name: user.name,
      email: user.email,
      role: user.role,
      id: user.id,
      password: "",
    });

    const update = (e) => {
      e.preventDefault();
      patch(route("admin.update"));
      setIsEdit(false);
    };
    return (
      <Modal
        closeable
        maxWidth="md"
        show={isEdit}
        onClose={() => setIsEdit(false)}
      >
        <div className="relative p-4">
          <form onSubmit={update}>
            <h2 className="font-semibold text-xl">Form Edit Berita</h2>
            <div>
              <label htmlFor="name" className="text-xs font-medium">
                Nama
              </label>
              <Input
                id="name"
                name="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                required
              />
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                required
              />
              <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
              <label htmlFor="password" className="text-xs font-medium">
                Reset Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
              <InputError message={errors.password} className="mt-2" />
            </div>
            <div>
              <label htmlFor="Role" className="text-xs font-medium">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
                value={data.role}
                onChange={(e) => setData("role", e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="super-admin">Super Admin</option>
              </select>
            </div>
            <div className="flex justify-end mt-4">
              <Button variants={"secondary"}>Edit</Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

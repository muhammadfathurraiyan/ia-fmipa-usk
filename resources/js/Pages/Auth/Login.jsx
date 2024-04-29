import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Input, InputError } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import Logo from "../../../../public/img/logo.png";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <main className="min-h-screen bg-sky-950 flex flex-col items-center justify-center p-4 text-white">
      <Head title="Log in" />
      <form onSubmit={submit} className="p-6 rounded">
        <Link href={route("beranda")} className="flex items-center gap-2 mb-8">
          <img src={Logo} alt="logo ia-fmipa-usk" className="size-20" />
          <h1 className="font-semibold leading-none text-2xl">
            IKATAN ALUMNI <br /> FAKULTAS MIPA USK
          </h1>
        </Link>

        <h2 className="text-2xl font-semibold text-center">User Login</h2>
        {status && (
          <div className="mb-4 font-medium text-sm text-green-600">
            {status}
          </div>
        )}
        <div>
          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-2">
          <label htmlFor="password" className="text-xs">
            Password
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Button variants={"primary"} disabled={processing}>
            Masuk
          </Button>
        </div>
      </form>
    </main>
  );
}

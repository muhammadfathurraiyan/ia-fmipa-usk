import { Link } from "@inertiajs/react";
import { ChevronDown, Menu, UserCircle, X } from "lucide-react";
import { useState } from "react";
import Dropdown from "../ui/dropdown";
import Logo from "../../../../public/img/logo.png";
import { buttonClass } from "../ui/button";

export default function Header({ auth }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-sky-950 text-white py-4 px-24 max-lg:px-4 flex items-center justify-between">
        <Link href={route("beranda")} className="flex items-center gap-2">
          <img src={Logo} alt="logo ia-fmipa-usk" className="size-16" />
          <h1 className="font-semibold leading-none">
            IKATAN ALUMNI <br /> FAKULTAS MIPA USK
          </h1>
        </Link>
        <nav className="max-lg:hidden">
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <Link
                href={route("beranda")}
                className="hover:text-red-500 transition-all uppercase"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Trigger>
                  <button
                    type="button"
                    className="hover:text-red-500 transition-all uppercase flex items-center gap-1"
                  >
                    Profile
                    <ChevronDown size={14} />
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Content className="rounded-none bg-slate-900">
                  <Dropdown.Link
                    href={route("sejarah")}
                    className="hover:bg-red-500 text-white uppercase text-sm"
                  >
                    sejarah
                  </Dropdown.Link>
                  <Dropdown.Link
                    href={route("struktur-organisasi")}
                    className="hover:bg-red-500 text-white uppercase text-sm"
                  >
                    struktur organisasi
                  </Dropdown.Link>
                  <Dropdown.Link
                    href={route("profile-pimpinan")}
                    className="hover:bg-red-500 text-white uppercase text-sm"
                  >
                    profil pimpinan
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Trigger>
                  <button
                    type="button"
                    className="hover:text-red-500 transition-all uppercase flex items-center gap-1"
                  >
                    Layanan
                    <ChevronDown size={14} />
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Content className="rounded-none bg-slate-900">
                  <Dropdown.Link
                    href={route("ult")}
                    className="hover:bg-red-500 text-white uppercase text-sm"
                  >
                    Unit layanan terpadu
                  </Dropdown.Link>
                  <Dropdown.Link
                    href={route("loker")}
                    className="hover:bg-red-500 text-white uppercase text-sm"
                  >
                    lowongan pekerjaan
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </li>
            <li>
              <Link
                href={route("database.index")}
                className="hover:text-red-500 transition-all uppercase"
              >
                Database
              </Link>
            </li>
            <li>
              <Link
                href={route("berita.index")}
                className="hover:text-red-500 transition-all uppercase"
              >
                Berita
              </Link>
            </li>
            <li>
              <Link
                href={route("kontak")}
                className="hover:text-red-500 transition-all uppercase"
              >
                Kontak
              </Link>
            </li>
            {auth.user ? (
              <li>
                <Dropdown>
                  <Dropdown.Trigger>
                    <button
                      type="button"
                      className="hover:text-red-500 transition-all uppercase flex items-center gap-1"
                    >
                      <UserCircle />
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Content className="rounded-none bg-slate-900">
                    <p className="border-b border-slate-800 px-2 py-1 text-white uppercase text-sm">
                      {auth.user.name}
                    </p>
                    {auth.user.role === "super-admin" && (
                      <Dropdown.Link
                        href={route("admin.index")}
                        className="hover:bg-red-500 text-white uppercase text-sm"
                      >
                        Admin
                      </Dropdown.Link>
                    )}
                    <Dropdown.Link
                      href={route("logout")}
                      method="post"
                      as="button"
                      className="hover:bg-red-500 text-white uppercase text-sm"
                    >
                      Logout
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </li>
            ) : (
              <li>
                <Link href={route("login")} className={buttonClass.primary}>
                  Masuk
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="hover:text-red-500 transition-all flex items-center justify-center"
          >
            {!toggle ? <Menu size={32} /> : <X size={32} />}
          </button>
        </div>
      </header>
      <Sidebar toggle={toggle} auth={auth} />
    </>
  );
}

function Sidebar({ toggle, auth }) {
  return (
    <aside
      className={`${
        toggle ? "visible opacity-100" : "invisible opacity-0"
      } fixed inset-0 z-10 bg-slate-900 text-white transition-all pt-24`}
    >
      <ul className="p-4">
        <li>
          <Link
            href={route("beranda")}
            className="hover:text-red-500 transition-all uppercase"
          >
            Beranda
          </Link>
        </li>
        <li className="group">
          <p className="cursor-pointer hover:text-red-500 flex items-center gap-1">
            PROFILE
            <span className="group-hover:rotate-180 duration-500">
              <ChevronDown size={14} />
            </span>
          </p>
          <ul className="ml-4 list-inside list-disc invisible opacity-0 h-0  group-hover:visible group-hover:opacity-100 group-hover:h-[4.5rem] duration-500">
            <li>
              <Link
                href={route("sejarah")}
                className="hover:text-red-500 transition-all uppercase"
              >
                sejarah
              </Link>
            </li>
            <li>
              <Link
                href={route("struktur-organisasi")}
                className="hover:text-red-500 transition-all uppercase"
              >
                struktur organisasi
              </Link>
            </li>
            <li>
              <Link
                href={route("profile-pimpinan")}
                className="hover:text-red-500 transition-all uppercase"
              >
                Profil pimpinan
              </Link>
            </li>
          </ul>
        </li>
        <li className="group">
          <p className="cursor-pointer hover:text-red-500 flex items-center gap-1">
            LAYANAN
            <span className="group-hover:rotate-180 duration-500">
              <ChevronDown size={14} />
            </span>
          </p>
          <ul className="ml-4 list-inside list-disc invisible opacity-0 h-0  group-hover:visible group-hover:opacity-100 group-hover:h-[3rem] duration-500">
            <li>
              <Link
                href={route("ult")}
                className="hover:text-red-500 transition-all uppercase"
              >
                Unit Layanan terpadu
              </Link>
            </li>
            <li>
              <Link
                href={route("loker")}
                className="hover:text-red-500 transition-all uppercase"
              >
                Lowongan Pekerjaan
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href={route("database.index")}
            className="hover:text-red-500 transition-all uppercase"
          >
            Database
          </Link>
        </li>
        <li>
          <Link
            href={route("berita.index")}
            className="hover:text-red-500 transition-all uppercase"
          >
            Berita
          </Link>
        </li>
        <li>
          <Link
            href={route("kontak")}
            className="hover:text-red-500 transition-all uppercase"
          >
            Kontak
          </Link>
        </li>
        {auth.user ? (
          <>
            {auth.user.role === "super-admin" && (
              <Link
                href={route("admin.index")}
                className="hover:text-red-500 transition-all uppercase"
              >
                Admin
              </Link>
            )}
            <li>
              <Link
                href={route("logout")}
                method="post"
                as="button"
                className={buttonClass.primary + " mt-1"}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link
              href={route("login")}
              className={buttonClass.primary + " mt-1"}
            >
              Masuk
            </Link>
          </li>
        )}
      </ul>
    </aside>
  );
}

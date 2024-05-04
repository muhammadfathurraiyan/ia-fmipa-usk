import { Link } from "@inertiajs/react";
import React from "react";
import Profile from "../../../../public/img/profile.jpg"

export default function Card({ name, img, prodi, angkatan, lulusan, id }) {
  return (
    <Link href={`/database/${id}`} className="group">
      <div className="relative h-[40vh] overflow-hidden">
        <img src={img ?? Profile } alt="" className="w-full min-h-full object-cover group-hover:scale-105 duration-300" />
        <p className="absolute bottom-0 w-full bg-black/60 text-white p-2 text-center">{name}</p>
      </div>
      <div className="text-xs">
        <p>Prodi: {prodi}</p>
        <p>Angkatan Tahun: {angkatan}</p>
        <p>Lulusan Tahun: {lulusan}</p>
      </div>
    </Link>
  );
}

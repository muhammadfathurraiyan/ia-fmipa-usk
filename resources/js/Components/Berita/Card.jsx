import { Link } from "@inertiajs/react";
import React from "react";

export default function Card({ category, id, img, title, content }) {
  return (
    <Link href={`/${category}/${id}`} className="group">
      <div className="w-full h-[35vh] overflow-hidden">
        <img
          src={img}
          alt="image"
          className="size-full object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="line-clamp-2">{content}</p>
    </Link>
  );
}

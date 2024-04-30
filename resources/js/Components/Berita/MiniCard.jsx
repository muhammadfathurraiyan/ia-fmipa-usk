import { Link } from "@inertiajs/react";

export default function MiniCard({ id, img, title }) {
  return (
    <Link href={`/berita/${id}`} className="flex items-center gap-6 group">
      <div className="size-24 overflow-hidden">
        <img
          src={img}
          alt="image"
          className="size-full object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <p className="w-3/4">{title}</p>
    </Link>
  );
}

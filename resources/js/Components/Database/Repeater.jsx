import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Repeater({ data, setDataRepeater }) {
  const dateArray = [];
  for (let i = 2024; i >= 1989; i--) {
    dateArray.push(i);
  }

  const [pekerjaan, setPekerjaan] = useState(
    data.pekerjaan ? data.pekerjaan : ""
  );
  const [tahunMulai, setTahunMulai] = useState(
    data.tahunMulai ? data.tahunMulai : ""
  );
  const [tahunSelesai, setTahunSelesai] = useState(
    data.tahunSelesai ? data.tahunSelesai : ""
  );

  const handleDelete = (id) => {
    setDataRepeater((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setDataRepeater((prev) =>
      prev.map((item) =>
        item.id === data.id
          ? {
              ...item,
              pekerjaan: pekerjaan,
              tahunMulai: tahunMulai,
              tahunSelesai: tahunSelesai,
            }
          : item
      )
    );
  }, [data.id, pekerjaan, tahunMulai, tahunSelesai]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <Input
          id="other"
          name="other"
          type="text"
          defaultValue={data.pekerjaan}
          onChange={(e) => setPekerjaan(e.target.value)}
          placeholder={`Pekerjaan ${data.id}`}
        />
        <Button
          type="button"
          onClick={() => handleDelete(data.id)}
          variants={"primary"}
        >
          -
        </Button>
      </div>
      <div className="flex gap-1">
        <select
          id="tahunMulai"
          name="tahunMulai"
          type="text"
          className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
          defaultValue={data.tahunMulai}
          onChange={(e) => setTahunMulai(e.target.value)}
        >
          <option value="">Tahun mulai</option>
          {dateArray.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
        <select
          id="tahunSelesai"
          name="tahunSelesai"
          type="text"
          defaultValue={data.tahunSelesai}
          onChange={(e) => setTahunSelesai(e.target.value)}
          className="text-neutral-950 focus:border-sky-900 rounded py-1 px-3 w-full border-neutral-500"
        >
          <option value="">Tahun selesai</option>
          <option value="sekarang">Sekarang</option>
          {dateArray.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

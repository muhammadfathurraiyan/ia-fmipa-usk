import React, { useEffect, useState } from "react";

export default function Selectoption({ setDatabase, database }) {
  const [defaultData, setDefaultData] = useState();
  const dateArray = [];
  for (let i = 1989; i <= 2030; i++) {
    dateArray.push(i);
  }

  const handleJurursan = (e) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText === "") {
      setDatabase(defaultData);
    } else {
      const filteredResults = defaultData.filter(
        (item) => item.prodi.toLowerCase() === searchText
      );
      setDatabase(filteredResults);
    }
  };

  const handleAngkatan = (e) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText === "") {
      setDatabase(defaultData);
    } else {
      const filteredResults = defaultData.filter((item) =>
        item.angkatan.toLowerCase().includes(searchText)
      );
      setDatabase(filteredResults);
    }
  };

  const handleLulusan = (e) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText === "") {
      setDatabase(defaultData);
    } else {
      const filteredResults = defaultData.filter((item) =>
        item.lulusan.toLowerCase().includes(searchText)
      );
      setDatabase(filteredResults);
    }
  };

  useEffect(() => {
    setDefaultData(database);
  }, []);
  return (
    <div className="flex justify-end mt-2 gap-2">
      <select
        onChange={(e) => handleJurursan(e)}
        className="border border-neutral-500 w-[140px] p-0 px-1 rounded focus:ring-0 text-[10px]"
      >
        <option value="" className="pr-2">Pilih Jurusan</option>
        <option value="D3 Teknik Elektronika">D3 Teknik Elektronika</option>
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

      <select
        onChange={(e) => handleAngkatan(e)}
         className="border border-neutral-500 w-[140px] p-0 px-1 rounded focus:ring-0 text-[10px]"
      >
        <option value="">Tahun Angkatan</option>
        {dateArray
          .sort((a, b) => b - a)
          .map((date) => (
            <option value={date}>{date}</option>
          ))}
      </select>

      <select
        onChange={handleLulusan}
         className="border border-neutral-500 w-[140px] p-0 px-1 rounded focus:ring-0 text-[10px]"
      >
        <option value="">Tahun Lulusan</option>
        {dateArray
          .sort((a, b) => b - a)
          .map((date) => (
            <option value={date}>{date}</option>
          ))}
      </select>
    </div>
  );
}

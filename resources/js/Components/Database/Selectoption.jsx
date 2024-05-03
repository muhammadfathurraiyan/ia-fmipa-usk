import React, { useEffect, useState } from "react";

export default function Selectoption({ setDatabase, database }) {
  const [defaultData, setDefaultData] = useState();
  const dateArray = [];
  for (let i = 1961; i <= 2024; i++) {
    dateArray.push(i);
  }

  const handleJurursan = (e) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText === "") {
      setDatabase(defaultData);
    } else {
      const filteredResults = defaultData.filter((item) =>
        item.prodi.toLowerCase() === searchText
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
    <div className="flex justify-end mt-2">
      <select
        onChange={(e) => handleJurursan(e)}
        className="border-none focus:ring-0 text-sm"
      >
        <option value="">Jurusan</option>
        <option value="informatika">Informatika</option>
        <option value="matematika">Matematika</option>
        <option value="fisika">Fisika</option>
        <option value="statistika">Statistika</option>
      </select>

      <select
        onChange={(e) => handleAngkatan(e)}
        className="border-none focus:ring-0 text-sm"
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
        className="border-none focus:ring-0 text-sm"
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

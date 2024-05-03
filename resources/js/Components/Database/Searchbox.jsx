import { useEffect, useState } from "react";
import { Input } from "../ui/input";

export default function Searchbox({ setDatabase, database }) {
  const [defaultData, setDefaultData] = useState();
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText === "") {
      setDatabase(defaultData);
    } else {
      const filteredResults = defaultData.filter((item) =>
        item.name.toLowerCase().includes(searchText)
      );
      setDatabase(filteredResults);
    }
  };

  useEffect(() => {
    setDefaultData(database);
  }, []);
  return <Input placeholder="Search" onChange={(e) => handleSearch(e)} />;
}

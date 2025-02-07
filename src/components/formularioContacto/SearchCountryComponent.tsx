import React, { useEffect, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Country } from "../../utils/types/countries";
import { useClickOutside } from "../../customHooks/clickOustsideHandler";
  
interface SearchCountryComponentProps {
  onInfoSended: (country: Country) => void;
  showSearch: boolean;
  onChangeShow: (show: boolean) => void;
}

function SearchCountryComponent({
  onInfoSended,
  showSearch,
  onChangeShow,
}: SearchCountryComponentProps) {
  const [countries, setDataCountry] = useState<Country[]>([]);
  const [allCountries, setDataCountryAll] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = () => {
    fetch("code_country.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson: Country[]) {
        setDataCountry(myJson.map((res) => res));
        setDataCountryAll(myJson.map((res) => res));
      });
  };

  const handleClickOutside = () => {
    onChangeShow(false);
  };

  const searchRef = useClickOutside(handleClickOutside);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    const filteredItems = allCountries.filter((country) =>
      country.nombre
        .toString()
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    );
    setDataCountry(filteredItems);
  };

  const selectCountry = (country: Country) => {
    onInfoSended(country);
    onChangeShow(!showSearch);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="min-w-[180px] max-w-[307px] bg-white p-1 pt-3 font-thin transition-all"
      ref={searchRef}
    >
      <div className="mb-2 flex items-center border border-b-[#7C7C7C] py-0">
        <input
          value={searchTerm}
          type="text"
          className="relative rounded-none border-none px-[15px] py-[8px] font-thin text-black"
          placeholder="Buscar"
          onChange={handleSearch}
        />
      </div>
      <div className="max-h-[200px] overflow-y-scroll">
        <ul>
          {countries.length != 0 ? (
            countries.map((country, index) => (
              <li
                key={index}
                className="cursor-pointer px-[10px] py-[5px] font-thin text-black hover:bg-gray-300"
                onClick={() => selectCountry(country)}
              >
                <span
                  className={`fi me-2 fi-${country.iso2.toString().toLowerCase()} px-2`}
                ></span>
                <span className="number px-2 font-thin text-black">
                  (+{country.phone_code})
                </span>
                <span className="font-thin text-black">{country.nombre}</span>
              </li>
            ))
          ) : (
            <p>Cargando paises...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchCountryComponent;

import React, { useEffect, useState } from "react";
import "./prag.scss";

const Prag = () => {
  const [name, setName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${name}`
      );
      const responseJson = await response.json();
      setData(responseJson);
    };

    fetchApi();
  }, [name]);

  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={searchQuery}
        id=""
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={() => setName(searchQuery)}>change name </button>

      <section className="prag-container">
        {data
          ? data.map((album, id) => (
              <div className="prag-card" key={id}>
                <div className="prag-image">
                  <img src={album.url} alt="" />
                </div>
                <h1 className="prag-card-title">{album.title}</h1>
              </div>
            ))
          : ""}
      </section>
    </div>
  );
};

export default Prag;

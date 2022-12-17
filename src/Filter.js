import React, { useEffect } from "react";

const Filter = ({ popular, setFilterd, genre, setGenre }) => {
  useEffect(() => {
    if (genre === 0) {
      setFilterd(popular);
      return;
    }

    const filteredItem = popular?.filter((movie) =>
      movie?.genre_id?.includes(genre)
    );
    setFilterd(filteredItem);
  }, [genre]);
  return (
    <div className="btnCon">
      <button onClick={() => setGenre(0)}>All</button>
      <button onClick={() => setGenre(35)}>Comedy</button>
      <button onClick={() => setGenre(28)}>Action</button>
    </div>
  );
};

export default Filter;

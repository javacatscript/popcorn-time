import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies"
        className="p-2 border border-gray-300 rounded-lg"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;

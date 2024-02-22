const SearchInput = ({ setsearch }) => {
  return (
    <div className="searchbar-wrapper">
      <img className="searchbar-icon" src="./icons/search.svg" alt="" />
      <input
        onChange={(e) =>setsearch(e.target.value)}
        type="search"
        className="searchbar"
        placeholder="Search Friends"
      />
    </div>
  );
};

export default SearchInput
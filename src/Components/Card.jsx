import Frienditem from "./Frienditem";
import SearchInput from "./SearchInput";
import Footer from "./Footer.jsx";
import { users } from "../Data/data.js";
import { useState } from "react";


const Card = () => {
    const [search, SetSearch] = useState("");

  return (
    <main>
      <h1>JCC Students Social</h1>
      <div className="card">
        <div className="card-header">
          <SearchInput setsearch={SetSearch} />
        </div>
        <div className="card-body">
          <div className="friends-list">
            <ul>
              <Frienditem user={users} search={search} />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Card;

import React from "react";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes["heading--primary"]}>🤟Rock Content 🤟</h1>
      <form
        className={classes.search}
        // onSubmit={(e) => {
        //   fetchTicketMasterData(e);
        //   fetchVideosHandler(e);
        // }}
      >
        <input
          type="text"
          placeholder="Type an artist or band"
          className={classes["search__field"]}
          //   onChange={changeInputHandler}
        ></input>
        <button className={`${classes.btn} ${classes["btn__search"]}`}>
          Search
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

export default Header;

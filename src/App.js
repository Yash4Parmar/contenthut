import React from "react";
import ImageSearch from "./components/image-search/ImageSearch";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Search></Search>
      <ImageSearch></ImageSearch>
    </>
  );
}

export default App;

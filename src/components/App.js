import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
// pass this data down as props to the child component(s) that need it!

function App() {
  return (
    <div>
      <NavBar />
      <Home
        name={user.name}
        color={user.color}
        bio={user.bio}
        city={user.city}
      />
      <About linkedin={user.links.linkedin} github={user.links.github} />
      {/* <Links linkedin={user.links.linkedin} github={user.links.github} /> */}
    </div>
  );
}

export default App;

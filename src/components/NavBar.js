import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const mylinks=links.map((link,index) =>{
    let Ref="#"+link
    return(
      <a href={Ref} key={index}>{link}</a>
    )
  })
  return(
    <nav>{mylinks}</nav>
  )
}

export default NavBar;

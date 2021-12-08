import React, { useEffect } from "react";

function About(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);
  return <div></div>;
}

export default About;

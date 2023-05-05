import React from "react";
import SeoulMap from "../components/SeoulMap";
import SeoulMap2 from "../components/SeoulMap";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <SeoulMap width="100%" height="100%" />
      {/* <SeoulMap2 width="100%" height="100%" /> */}
    </div>
  );
}

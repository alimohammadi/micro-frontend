import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp.js";
console.log(mount);

export default () => {
  return (
    <>
      <MarketingApp />
    </>
  );
};

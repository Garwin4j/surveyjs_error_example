import React from "react";
import { render } from "react-dom";
import { SurveyPage } from "./SurveyCreator";
function App() {
  return <SurveyPage />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

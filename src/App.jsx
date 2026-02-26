import React from "react";
import Header from "./component/Header";
import Scores from "./component/Scores";
import {
  JAVA_RESULTS,
  PYTHON_RESULTS,
  HTML_RESULTS,
  ENGLISH_RESULTS,
} from "./data";

function App() {
  return (
    <>
      <Header BatchName="2024" />

      <main className="scores-container">
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS} />
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS} />
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;

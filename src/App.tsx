import "./App.css";

import katie from "./images/katie.png";
import wedding from "./images/wedding.png";
import bike from "./images/bike.png";

import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import React, { FunctionComponent } from "react";

interface CardViewProps {}

const CardView: FunctionComponent<CardViewProps> = (
  props: React.PropsWithChildren<CardViewProps>
) => {
  return <div className="card-view">{props.children}</div>;
};

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main">
        <Hero />
        <CardView>
          <Card
            image={katie}
            rating={5.0}
            ratingCount={6}
            country="USA"
            description="Life lessons with Katie Zaferes"
            price={136}
          />
          <Card
            image={wedding}
            rating={5.0}
            ratingCount={6}
            country="USA"
            description="Life lessons with Katie Zaferes"
            price={136}
          />
          <Card
            image={bike}
            rating={5.0}
            ratingCount={6}
            country="USA"
            description="Life lessons with Katie Zaferes"
            price={136}
          />
        </CardView>
      </main>
    </div>
  );
}

export default App;

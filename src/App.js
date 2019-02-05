import React from "react";
import Header from "./components/Header";
import "./App.css";
import Title from "./components/Title";
import Cover from "./components/Cover";
import Item from "./components/Item";
import Button from "./components/Button";
import Subtitle from "./components/Subtitle";
import Description from "./components/Description";

class App extends React.Component {
  render() {
    return (
      <>
        <Header className="header--bg" />
        <Title text="2001: L'Odysée de l'espace" />
        <Cover />
        <Item label="Date de reprise" text="7 mars 2001" />
        <Item label="Date de sortie" text="27 semptembre 1968" />
        <Item label="De" text="Stanley Kubrick" />
        <Item
          label="Avec"
          text="Keir Dullea, Gary Lockwood, William Sylvester"
        />
        <Item label="Genre" text="Science fiction" />
        <Item label="Nationalités" text="Américaine, Britanique" />
        <Button text="Bande-annonce" theme="button--black" />
        <Button text="Bande-annonce" theme="button--yellow" />
        <Button text="Bande-annonce" theme="button--grey" />
        <Subtitle text="Synopsis et details" />
        <Description
          text={`A l'aube de l'Humanité, dans le désert africain, une tribu de primates subit les assauts répétés d'une bande rivale, qui lui dispute un point d'eau. La découverte d'un monolithe noir inspire au chef des singes assiégés un geste inédit et décisif. Brandissant un os, il passe à l'attaque et massacre ses adversaires. Le premier instrument est né.
En 2001, quatre millions d'années plus tard, un vaisseau spatial évolue en orbite lunaire au rythme langoureux du \"Beau Danube Bleu". A son bord, le Dr. Heywood Floyd enquête secrètement sur la découverte d'un monolithe noir qui émet d'étranges signaux vers Jupiter.
Dix-huit mois plus tard, les astronautes David Bowman et Frank Poole font route vers Jupiter à bord du Discovery. Les deux hommes vaquent sereinement à leurs tâches quotidiennes sous le contrôle de HAL 9000, un ordinateur exceptionnel doué d'intelligence et de parole. Cependant, HAL, sans doute plus humain que ses maîtres, commence à donner des signes d'inquiétude : à quoi rime cette mission et que risque-t-on de découvrir sur Jupiter ?`}
        />
      </>
    );
  }
}

export default App;

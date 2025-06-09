// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

  if (navigator.serviceWorker) {
+   navigator.serviceWorker.register("/ICD2O-Unit-6-03-Sasha-OK-bit/sw.js",
  {
  scope: "/ICD2O-Unit-6-03-Sasha-OK-bit/",
    })
}

async function getData() {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto"
    const infoJSON = await fetch(url);
    const JSONdata = await infoJSON.json();

    const pokemon = JSONdata.main.temp;

    document.getElementById("answer1").innerHTML = pokemon.toFixed(0);
  }catch (error) {
    console.log(error);
  }
}
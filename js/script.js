// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict"

  if (navigator.serviceWorker) {
+   navigator.serviceWorker.register("/ICD2O-Assignment-Sasha-OK-bit/sw.js",
  {
  scope: "/ICD2O-Unit-6-03-Sasha-OK-bit/",
    })
}



async function getData() {
  try {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    const infoJSON = await fetch(url);
    const JSONdata = await infoJSON.json();

    const pokemonName = JSONdata.name;

    document.getElementById("answer1").innerHTML = 'Random pokemon:' + pokemonName;
  }catch (error) {
    console.log(error);
  }
}
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction

// Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.

// Aplikacijų programavimo sąsaja (angl. Application Programming Interface, API) – tai sąsaja, kurią suteikia kompiuterinė sistema, biblioteka ar programa tam, kad programuotojas per kitą programą galėtų pasiekti jos funkcionalumą ar apsikeistų su ja duomenimis.

// pvz twitter ar facebook leidzia naudoti savo funkcionaluma kituose tinklapiuose

fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => console.log(data.results));

// rest api
// https://www.youtube.com/watch?v=SLwpqD8n3d0

// API example in general
/**
 * Me - sitting at the table in a restaurant, I am web application, website
 *
 * Kitchen - like a server, which processes everything (certain requests)
 *
 * Waiter - like an API - takes a certain order, and asks kitchen, and then brings a certain meal (data or response I requested)
 */

// REST API - Representational State Transfer
/**
 * Architecture style for designing networked applications
 * Uses HTTP for requests
 * Treats server objects as resources that can be created or destroyed
 * I.E. blog posts - create, read, update, delete
 */

// API - is a messenger
// REST - let's us use HTTP requests to format these messages

// GET: Retrieve data from a specified resource;
// POST: Submit data to be processed to a specified resource
// PUT: Update a specified resource
// DELETE: Delete a specified resource

// ENDPOINTS is URI/URL where api/service can be accessed by a client application

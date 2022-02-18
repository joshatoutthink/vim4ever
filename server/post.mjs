#! /usr/bin/env node

import fetch from "node-fetch";
const url = "http://localhost:8082/";
const response = await fetch(url, {
  method: "POST",
  body: JSON.stringify({
    code: 'echo "hello world";',
    filename: "index.php",
  }),
});
const body = await response.text();
console.log(body);

const number = 19;
const url = "http://numbersapi.com";

// step 1
$.getJSON(`${url}/${number}?json`).then(data => {
  console.log(data);
});

// step 2
const numbers = [1, 4, 13, 19];
$.getJSON(`${url}/${numbers}?json`).then(data => {
  console.log(data);
});

// step 3
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}/${number}?json`);
  })
).then(facts => {
  facts.forEach(data => $("#facts").append(`<p>${data.text}</p>`));
});

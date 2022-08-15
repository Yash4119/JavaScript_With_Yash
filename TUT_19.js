console.log(
  "this is tut 19 and today we will learn the topic :- Solution of Exercise no 1 (Web Crawler)"
);

// given a string
let str = "python";

// from the given dom search the links which have this string embedded
let links = document.links;
let href;
console.log(links);
Array.from(links).forEach(function (element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(element);
  } else {
    console.log("keyword not present in the link");
  }
});

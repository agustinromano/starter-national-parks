console.log(document);
const findElement = document.querySelector(".hello");
console.log(findElement);

const buttons = document.querySelectorAll("button");
console.log(buttons);

const heading3List = document.querySelectorAll("h3");

for (let element of heading3List.values()) {
  console.log(element);
}

const list = document.querySelectorAll(".description-display");
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});

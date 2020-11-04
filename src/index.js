import "./styles.css";
import {
  delayStringAfter1Second,
  delayStringAfter1SecondPromise,
  delayStringAfter1SecondCustomPromisify,
  delayStringAfter1SecondPromsify
} from "./delayStringAfter1Second";
const app = document.getElementById("app");

app.innerHTML = `
 <h1>Hello Vanilla!!</h1>
`;

const span = document.createElement("span");
let text = document.createTextNode("loading...");
span.append(text);
app.append(span);
delayStringAfter1Second("짜잔!", (err, data) => {
  span.removeChild(text);
  text = document.createTextNode(err || data);
  span.append(text);
  app.append(span);
});

// const span = document.createElement("span");
// let text = document.createTextNode("loading...");
// span.append(text);
// app.append(span);
// delayStringAfter1SecondPromise("짜잔!!")
//   .finally(() => {
//     span.removeChild(text);
//   })
//   .then((data) => {
//     text = document.createTextNode(data);
//   })
//   .catch((err) => {
//     text = document.createTextNode(err);
//   })
//   .finally(() => {
//     span.append(text);
//     app.append(span);
//   });

// const span = document.createElement("span");
// let text = document.createTextNode("loading...");
// span.append(text);
// app.append(span);
// delayStringAfter1SecondCustomPromisify("짜잔!!!")
//   .finally(() => {
//     span.removeChild(text);
//   })
//   .then((data) => {
//     text = document.createTextNode(data);
//   })
//   .catch((err) => {
//     text = document.createTextNode(err);
//   })
//   .finally(() => {
//     span.append(text);
//     app.append(span);
//   });

// const span = document.createElement("span");
// let text = document.createTextNode("loading...");
// span.append(text);
// app.append(span);
// delayStringAfter1SecondCustomPromisify("짜잔!!!!")
//   .finally(() => {
//     span.removeChild(text);
//   })
//   .then((data) => {
//     text = document.createTextNode(data);
//   })
//   .catch((err) => {
//     text = document.createTextNode(err);
//   })
//   .finally(() => {
//     span.append(text);
//     app.append(span);
//   });

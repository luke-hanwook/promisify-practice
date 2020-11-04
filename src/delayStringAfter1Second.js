import customPromisify from "./promisify";
import { promisify } from "es6-promisify";

// 입력 받은 string을 1초 지연 시키는 함수
export const delayStringAfter1Second = function (data, callback) {
  if (typeof data !== "string") return callback(new Error("No string"));
  setTimeout(() => {
    callback(null, data);
  }, 1000);
};

// 프로미스화
export const delayStringAfter1SecondPromise = (data) => {
  return new Promise((resolve, reject) => {
    delayStringAfter1Second(data, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

// custom promisify 함수
export const delayStringAfter1SecondCustomPromisify = customPromisify(
  delayStringAfter1Second
);

// es6-promisify
export const delayStringAfter1SecondPromsify = promisify(
  delayStringAfter1Second
);

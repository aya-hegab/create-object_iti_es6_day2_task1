var obj = {
  [Symbol.replace]: function (str) {
    if (str.length > 15) {
      return str.slice(0, 15) + "...";
    } else {
      return str;
    }
  },
};

var userStr = "hdfjgurignhlkty";
console.log(userStr.length);
console.log(userStr.replace(obj));
userStr = "hdfjgurignhlktyo";
console.log(userStr.length);
console.log(userStr.replace(obj));
userStr = "hdfjgurignhlktyogfhfghfg";
console.log(userStr.length);
console.log(userStr.replace(obj));

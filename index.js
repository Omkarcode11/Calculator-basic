let res = [];
let result = "";
let display = document.getElementById("result");

let keys = document.querySelectorAll(".keypad > div").forEach((div) => {
  div.addEventListener("click", (e) => {
    let val = e.target.innerText;

    if (e.target.innerText == "X") {
      val = "*";
    }
    if (val == "=") {
      let cal;
      try {
        cal = Number(eval(res.join(""))).toFixed(1);
        if (isNaN(cal) || cal == Infinity || cal == undefined) {
          result = "Invalid";
        }
      } catch (err) {
        result = "Error";
      }
      res = [];
      if (result != "Error" || result != "Invalid") {
        res.push(cal);
      }
      display.innerText = cal;
      return;
      //   display.innerText = cal;
    } else if (val == "DEL") {
      res.pop();
    } else if (val == "RESET") {
      res = [];
    } else {
      res.push(val);
    }
    result = res.join("");
    display.innerText = result;
    display.scrollLeft = display.scrollWidth - display.clientWidth;
  });
});

addEventListener;

console.log(keys);

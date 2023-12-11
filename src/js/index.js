import "../styles/index.scss";
import "../styles/utils.scss";
import { drawChart } from "./func/drawChart.js";
import { insertImg } from "./func/insertImg.js";

const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

const columns_div = document.getElementsByClassName("column");

window.addEventListener("load", () => {
  insertImg();
  drawChart(data);
})

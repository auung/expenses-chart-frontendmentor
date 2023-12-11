function drawChart(data) {
  const columnContainers_div = document.getElementsByClassName("container-column");

  let highest = 0;
  let highlightIndex;

  for (let i = 0; i < columnContainers_div.length; i++) {
    const dataText = data[i].amount;
    const height = Math.floor(dataText * 3);
    const label = data[i].day;

    columnContainers_div[i].querySelector(".data").textContent = `$${dataText}`;
    columnContainers_div[i].querySelector(".column").style.height = `${height}px`;
    columnContainers_div[i].querySelector(".label").textContent = label;

    if (height > highest) {
      highest = height;
      highlightIndex = i;
    }
  }

  columnContainers_div[highlightIndex].classList.add("highlight");
  
}

export { drawChart };
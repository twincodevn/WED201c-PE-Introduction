function calTotal() {
  const input_elements = document.querySelectorAll(".input_element");
  const ul_testing_element = document.getElementById("ul_testing");
  const total_element = document.getElementById("total");

  let total_price = 0;
  input_elements.forEach((element) => {
    if (element.checked === true) {
      console.log("testing");
      const li_ele = document.createElement("li");
      li_ele.textContent = element.nextSibling.textContent;
      const price_raw = element.nextSibling.nextSibling.textContent.charAt(0);
      const price = parseInt(price_raw);
      total_price += price;
      ul_testing_element.appendChild(li_ele);
    }
  });
  total_element.textContent = "Total amount: " + total_price;
  
}


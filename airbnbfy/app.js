const beforeText = document.getElementById("before");
const afterText = document.getElementById("after");
const convertButton = document.getElementById("convertButton");

beforeText.addEventListener("click", function () {
  init();
});

convertButton.addEventListener("click", function () {
  const beforeValue = beforeText.value;
  const converted = beforeValue.split("").map((value) => {
    let convertedValue = value;
    if ("\uAC00" <= value && value <= "\uD7AF") {
      const randomValue = (Math.ceil(Math.random() * 10) % 2) + 1;

      let unicode = String.fromCharCode(value.charCodeAt(0) + randomValue);

      if (unicode < "\uAC00" || "\uD7AF" < unicode) {
        unicode = String.fromCharCode(value.charCodeAt(0) + -1 * randomValue);
      }

      convertedValue = unicode;
    }
    return convertedValue;
  });

  afterText.value = converted.join("");
});

function init() {
  beforeText.value = "";
  afterText.value = "";
}

init();

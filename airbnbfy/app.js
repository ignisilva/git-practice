const beforeText = document.getElementById("before");
const afterText = document.getElementById("after");
const convertButton = document.getElementById("convertButton");

beforeText.addEventListener("click", function () {
  beforeText.value = "";
});

convertButton.addEventListener("click", function () {
  const before = beforeText.value;
  console.log(before);
});

function init() {
  beforeText.value = "";
  afterText.value = "";
}

init();

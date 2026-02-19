const updateContentBtn = document.getElementById("updateContentBtn");
const dynamicContent = document.getElementById("dynamicContent");

const testButton = document.getElementById("updateContentBtn2");
const loginButton = document.getElementById("updateContentBtn3");
const resetButton = document.getElementById("updateContentBtn4");
const submitButton = document.getElementById("updateContentBtn5");

testButton.addEventListener("click", () => {
  dynamicContent.innerHTML = "<P>Test button was clicked</P>";
});

loginButton.addEventListener("click", () => {
  dynamicContent.innerHTML = "<P>Login button was clicked</P>";
});
resetButton.addEventListener("click", () => {
  dynamicContent.innerHTML = "<P>Reset button was clicked</P>";
});

submitButton.addEventListener("click", () => {
  dynamicContent.innerHTML = "<P>Submit button was clicked</P>";
});

const elementsContainer = document.getElementById("elementsContainer");
const createElementBtn = document.getElementById("createElementBtn");
const deleteFirstElementBtn = document.getElementById("deleteFirstElementBtn");

let elementCount = 0;

createElementBtn.addEventListener("click", () => {
  elementCount++;
  const newParagraph = document.createElement("p");
  newParagraph.textContent = `Dynamically created element ${elementCount}`;
  elementsContainer.appendChild(newParagraph);
});

deleteFirstElementBtn.addEventListener("click", () => {
  if (elementsContainer.children.length > 0) {
    elementsContainer.removeChild(elementsContainer.children[0]);
  }
});

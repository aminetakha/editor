const htmlObject = {};

const container = document.querySelector(".container");
const blocks = document.querySelectorAll(".block");
const plusIcons = document.querySelectorAll(".plus");
const options = document.querySelector(".options");

// document.addEventListener("click", (e) => {
//   plusIcons.forEach((plusIcon) => {
//     plusIcon.classList.remove("hide-add");
//     plusIcon.nextElementSibling.classList.add("hide-options");
//     plusIcon.nextElementSibling.classList.remove("options");
//   });
// });

const blockContainer = `
<div class="block-container">
<div class="add">
  <span class="plus" title="Add">+</span>
  <div class="hide-options">
    <ul>
      <li>Text</li>
      <li>Heading</li>
      <li>Image</li>
      <li>Paragraph</li>
    </ul>
  </div>
</div>
<div class="block" contenteditable="true"></div>
</div>
`;

blocks[0].focus();

blocks.forEach((block) => {
  block.addEventListener("keypress", (e) => {
    console.log(e.code);
    if (e.code === "Enter") {
      container.innerHTML += blockContainer;
    }
  });
});

const hidePlusIcons = () => {
  plusIcons.forEach((plusIcon) => {
    plusIcon.classList.add("hide-add");
  });
};

plusIcons.forEach((plusIcon) => {
  plusIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    hidePlusIcons();
    plusIcon.classList.remove("hide-add");
    plusIcon.nextElementSibling.classList.toggle("hide-options");
    plusIcon.nextElementSibling.classList.toggle("options");
  });
});

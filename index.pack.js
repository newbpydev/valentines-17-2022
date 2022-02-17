const btnEl = document
  .getElementById("btn")
  .addEventListener("click", filterDuplicates);

const allEmojisP = document.getElementById("all-emojis-p");
const uniqueEmojisP = document.getElementById("unique-emojis-p");

const emojiSpanEls = document.querySelectorAll(".emoji-span");

const emojis = [
  "💘",
  "💘",
  "🌞",
  "🧡",
  "🍇",
  "🧁",
  "⚡️",
  "💝",
  "🐱",
  "💘",
  "🧡",
  "💫",
  "🍓",
  "💜",
  "⚡️",
  "⚡️",
  "🐶",
  "💘",
  "🍇",
  "🐱",
  "💘",
  "💫",
  "🍓",
  "💜",
  "💕",
  "⚡️",
  "💘",
  "🌞",
  "🐱",
  "💘",
  "💫",
  "🍓",
  "💜",
  "⚡️",
  "🧡",
  "💕",
  "🍇",
  "💘",
];

emojiSpanIt();

function filterDuplicates() {
  // 1. Filter out all duplicate emojis, leaving only one of each emoji.
  // 2. Render the unique emojis in uniqueEmojisP.
  // Just for fun: Replace them with your favourite emojis! 😃
}

//* ////////////////////////////////////////////////////////////////////////////
//* custom functions

emojiSpanEls.forEach((emojiSpanEl) => {
  emojiSpanEl.addEventListener("mouseenter", (e) => {
    console.log("I see an emoji");
    console.log(e);
    console.log(e.shiftKey);
  });
});

function emojiSpanIt() {
  emojis.forEach((emoji, i) => {
    // console.log(emoji, i);
    const emojiSpan = document.createElement("span");
    emojiSpan.classList.add("emoji-span");
    emojiSpan.textContent = emoji;

    allEmojisP.appendChild(emojiSpan);
  });
}

// allEmojisP.addEventListener("mouseenter", (e) => {
//   console.log("I am in P on mouseenter");
// });

//! ////////////////////////////////////////////////////////////////////////////
//! Safe for a rainyday
// for (let emoji of emojis) {
//   allEmojisP.textContent += emoji;
// }

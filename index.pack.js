const btnEl = document
  .getElementById("btn")
  .addEventListener("click", filterDuplicates);

const allEmojisP = document.getElementById("all-emojis-p");
const uniqueEmojisP = document.getElementById("unique-emojis-p");

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
const emojiSpanEls = document.querySelectorAll(".emoji-span");

function filterDuplicates() {
  // 1. Filter out all duplicate emojis, leaving only one of each emoji.
  // 2. Render the unique emojis in uniqueEmojisP.
  // Just for fun: Replace them with your favourite emojis! 😃
}

//* ////////////////////////////////////////////////////////////////////////////
//* custom functions

const shiftkey = KeyboardEvent.shiftKey;
console.log(shiftkey);

//* add event to emojis if mouseover and shift to select all alikes
emojiSpanEls.forEach((emojiSpanEl) => {
  emojiSpanEl.addEventListener("mouseover", (eInner) => {
    //! If shift is active
    document.addEventListener("keydown", (e) => {
      // console.log(e.shiftKey);

      if (e.shiftKey) {
        // console.log("I am in edoc");
        emojiSpanEls.forEach((emoji) => {
          if (emojiSpanEl.textContent === emoji.textContent) {
            emoji.classList.add("emoji-span--shifted");
          } else {
            emoji.classList.remove("emoji-span--shifted")
          }
        });
      } else {
        console.log(" I am an else");
      }
    });

    //! If shift is not active
    document.addEventListener("keyup", (e) => {
      console.log("I am trying to refresh");
      emojiSpanEls.forEach((emoji) => {
        emoji.classList.remove("emoji-span--shifted");
      });
    });

  });

  emojiSpanEl.addEventListener("mouseout", (e) => {
    console.log("I am mousing out");
    emojiSpanEls.forEach((emoji) => {
      emoji.classList.remove("emoji-span--shifted");
    });
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

allEmojisP.addEventListener("mouseenter", (e) => {
  // console.log("I am in P on mouseenter");
});

//! ////////////////////////////////////////////////////////////////////////////
//! Safe for a rainyday
// for (let emoji of emojis) {
//   allEmojisP.textContent += emoji;
// }

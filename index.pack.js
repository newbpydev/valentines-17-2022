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

//* setting the emoji elements on the allEmojisP element
emojiSpanIt();
const emojiSpanEls = document.querySelectorAll(".emoji-span");
// emojiSpanIt(true);
const emojiUniqueEls = [];

//! This is the main call function to filter duplicares
function filterDuplicates() {
  // 1. Filter out all duplicate emojis, leaving only one of each emoji.
  // 2. Render the unique emojis in uniqueEmojisP.
  // Just for fun: Replace them with your favourite emojis! 😃
}

//* ////////////////////////////////////////////////////////////////////////////
//* custom functions

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


//* add emojis in span elements and add the emoji-span class
function emojiSpanIt(hidden=false) {
  emojis.forEach((emoji, i) => {
    const emojiSpan = document.createElement("span");
    emojiSpan.classList.add("emoji-span");
    if (hidden) {emojiSpan.classList.add("emoji-span--inactive")};
    emojiSpan.textContent = emoji;

    allEmojisP.appendChild(emojiSpan);
    if (hidden) {uniqueEmojisP.appendChild(emojiSpan)};
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

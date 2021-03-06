const btnEl = document
  .getElementById("btn")
  .addEventListener("click", filterDuplicates);

const allEmojisP = document.getElementById("all-emojis-p");
const uniqueEmojisP = document.getElementById("unique-emojis-p");

const emojis = [
  "๐",
  "๐",
  "๐",
  "๐งก",
  "๐",
  "๐ง",
  "โก๏ธ",
  "๐",
  "๐ฑ",
  "๐",
  "๐งก",
  "๐ซ",
  "๐",
  "๐",
  "โก๏ธ",
  "โก๏ธ",
  "๐ถ",
  "๐",
  "๐",
  "๐ฑ",
  "๐",
  "๐ซ",
  "๐",
  "๐",
  "๐",
  "โก๏ธ",
  "๐",
  "๐",
  "๐ฑ",
  "๐",
  "๐ซ",
  "๐",
  "๐",
  "โก๏ธ",
  "๐งก",
  "๐",
  "๐",
  "๐",
];

//* setting the emoji elements on the allEmojisP element
emojiSpanIt();

//!List of emoji elements
let emojiSpanEls = document.querySelectorAll(".emoji-span");
updateEmojisEls();



//! This is the main call function to filter duplicares
//* filter duplicates
function filterDuplicates() {
  // 1. Filter out all duplicate emojis, leaving only one of each emoji.
  // 2. Render the unique emojis in uniqueEmojisP.
  // Just for fun: Replace them with your favourite emojis! ๐
  const emojiTopList = document.querySelectorAll(".emoji-span");

  const uniqueList = emojis.filter(onlyUnique);
  uniqueList.forEach((emoji) => {
    uniqueEmojisP.textContent += emoji;
  })
}

//* ////////////////////////////////////////////////////////////////////////////
//* custom functions
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


//* add event to emojis if mouseover and shift to select all alikes
function topPUpdate() {
  emojiSpanEls.forEach((emojiSpanEl, i) => {
    emojiSpanEl.addEventListener("mouseover", (eInner) => {
      //! If shift is active
      document.addEventListener("keydown", (e) => {
        if (e.shiftKey) {
          emojiSpanEls.forEach((emoji) => {
            if (emojiSpanEl.textContent === emoji.textContent) {
              emoji.classList.add("emoji-span--shifted");
            } else {
              emoji.classList.remove("emoji-span--shifted");
            }
          });
        }
      });

      //! If shift is not active
      document.addEventListener("keyup", (e) => {
        emojiSpanEls.forEach((emoji) => {
          emoji.classList.remove("emoji-span--shifted");
        });
      });
    });

    emojiSpanEl.addEventListener("mouseout", (e) => {
      emojiSpanEls.forEach((emoji) => {
        emoji.classList.remove("emoji-span--shifted");
      });
    });

    emojiSpanEl.addEventListener("click", function clickedEmoji(e) {
      emojiSpanEl.classList.add("emoji-span--selected");
      this.removeEventListener("click", clickedEmoji);
      uniqueEmojisP.appendChild(emojiSpanEl);
    });
  });
}

//* add emojis in span elements and add the emoji-span class
function emojiSpanIt(hidden = false) {
  emojis.forEach((emoji, i) => {
    const emojiSpan = document.createElement("span");
    emojiSpan.classList.add("emoji-span");
    if (hidden) {
      emojiSpan.classList.add("emoji-span--inactive");
    }
    emojiSpan.textContent = emoji;

    allEmojisP.appendChild(emojiSpan);
    if (hidden) {
      uniqueEmojisP.appendChild(emojiSpan);
    }
  });
}

allEmojisP.addEventListener("mouseenter", (e) => {
  topPUpdate();
});

uniqueEmojisP.addEventListener("mouseenter", (e) => {
  const emojiUniqueEls = document.querySelectorAll(".emoji-span--selected");

  emojiUniqueEls.forEach((emoji, i) => {
    emoji.addEventListener("click", function clickedEmoji(e) {
      emoji.classList.remove("emoji-span--selected");
      emoji.removeEventListener("click", clickedEmoji);
      allEmojisP.appendChild(emoji);
    });
  });
});

function updateEmojisEls() {}

//! ////////////////////////////////////////////////////////////////////////////
//! Safe for a rainyday
// for (let emoji of emojis) {
//   allEmojisP.textContent += emoji;
// }

// Format date as MM/DD/YYYY
module.exports = {
  format_date: (date) => {
      return date.toLocaleDateString();
  },
};

module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
};

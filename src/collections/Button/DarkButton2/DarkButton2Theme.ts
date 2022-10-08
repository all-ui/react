export default {
  colors: {
    one: "#111",
    two: "#ccc",
    three: "#000",
    four: "#8700ff",
    five: "#ff009e",
  },
  shadows: {
    one: "box-shadow: 0 0 30px rgb(255 0 158 / 50%)",
  },
  transitions: {
    one: "transition: box-shadow .3s",
  },
  gradients: {
    one: {
      type: "linear",
      deg: "-60",
      colors: [
        { which: "four", op: "0" },
        { which: "five", op: "100%" },
      ],
    },
  },
};

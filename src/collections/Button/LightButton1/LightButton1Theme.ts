export default {
  colors: {
    one: "#111",
    two: "#ccc",
    three: "#000",
    four: "#6b005c",
    five: "#ff009e",
    six: "#fff",
  },
  shadows: {
    one: "box-shadow: 0 3px 5px rgb(0 0 0 / 25%)",
  },
  transitions: {
    one: "transition: all .3s ease-in-out",
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

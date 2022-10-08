export default {
  background: { type: "color", which: "one" },
  colors: {
    one: "#18191a",
    two: "#111",
    three: "#1d1d1d",
    four: "#fff",
    five: "#8700ff",
    six: "#ff009e",
    seven: "#ccc",
    eight: "#000",
    nine: "#7e7e7e",
    ten: "#3b3b3b",
  },
  fontFamily: "Inter",
  fontColor: "four",
  gradients: {
    one: {
      type: "linear",
      deg: "-60",
      colors: [
        { which: "five", op: "0" },
        { which: "six", op: "100%" },
      ],
    },
  },
  shadows: {
    one: "box-shadow: 0 0 0 0.2rem rgb(59 59 59 / 40%)",
    two: "box-shadow: 0 0 0 0.2rem rgb(59 59 59 / 15%)",
  },
  transitions: {
    one: "transition: background 0.23s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius .7s ease-in-out",
    two: "transition: all .5s",
  },
};

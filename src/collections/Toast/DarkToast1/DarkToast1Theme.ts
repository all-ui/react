export default {
  colors: {
    one: "green",
    two: "#111",
    three: "#042504",
    four: "#fff",
    five: "#8f1111",
    six: "#400c0c",
    seven: "#be3636",
  },
  gradients: {
    one: {
      type: "linear",
      deg: "-60",
      colors: [
        { which: "three", op: "10%" },
        { which: "two", op: "90%" },
      ],
    },
    two: {
      type: "linear",
      deg: "-60",
      colors: [
        { which: "six", op: "10%" },
        { which: "two", op: "90%" },
      ],
    },
  },
};

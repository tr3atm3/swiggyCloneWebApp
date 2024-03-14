const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "Hello World from react"),
  React.createElement("h2", {}, "Hello another world")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(root);
root.render(heading);

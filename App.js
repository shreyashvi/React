{
  /* <div id="parent">
  <div id="child">
    <h1>"hello shreya</h1>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hello shreya")
  )
);
console.log(parent);
// const heading = React.createElement("h1", { id: "heading" }, "React hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "heading" }, "Heading"),
  React.createElement("div", { id: "bob" }, [
    React.createElement("div", {}, "Item 1"),
    React.createElement("div", {}, "Item 2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

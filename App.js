const parent = React.createElement("h1", {id:"parent"}, React.createElement("div",{id:"child"}, React.createElement("h1",{id:"grandchild"},"i am grand child")));



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent)
/* <div id= "Parent">
    <div id = "child">
        <h1>Hello Iam an H1 tag</h1>
        <h2>Hello Iam an H2 tag</h2>
    </div>
    <div id = "child2">
        <h1>Hello Iam an H1 tag</h1>
        <h2>Hello Iam an H2 tag</h2>
    </div>
</div> */




// const heading = React.createElement("h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World From React!!!!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Iam an H1 Tag"),
        React.createElement("h2", {}, "Iam an H2 Tag")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Iam an H1 Tag"),
        React.createElement("h2", {}, "Iam an H2 Tag")]
    )])

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
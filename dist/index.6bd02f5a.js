/* <div class="main">
  <section class="section1">
    <h1>Section 1 H1 heading</h1>
    <h2>Section 1 H2 heading</h2>
  </section>
  <section class="section2">
    <h1>Section 2 H1 heading</h1>
    <h2>Section 2 H2 heading</h2>
  </section>
</div>; */ const heading = React.createElement("div", {
    class: "main"
}, [
    React.createElement("section", {
        class: "section1"
    }, [
        React.createElement("h1", {
            class: "h1"
        }, "section1"),
        React.createElement("h2", {
            class: "h2"
        }, "section2")
    ]),
    React.createElement("section", {
        class: "section2"
    }, [
        React.createElement("h1", {
            class: "h1"
        }, "section1"),
        React.createElement("h2", {
            class: "h2"
        }, "section2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map

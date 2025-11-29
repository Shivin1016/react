const App = () => {
  function btnClicked() {
    console.log("button is clicked");
  }
  function inputChanging(input) {
    console.log(input);
  }
  function pageScrolling(elem) {
    console.log("page scrolling....." , elem);
  }

  return (
    <div>
      <h1>Hello Shivani</h1>
      <button
        onClick={(elem) => {
          console.log(elem, "hey Shiv");
          btnClicked();
        }}
      >
        Change User
      </button>
      <input
        onChange={(elem) => {
          inputChanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter Your Name"
      />
      <div
        onMouseMove={(elem) => {
          console.log(elem.clientY);
        }}
        className="box"
      >
        Nacchoo
      </div>
      <div
        onWheel={(elem) => {
          pageScrolling(elem);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;

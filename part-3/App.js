const App = (props) => {
  return (
    <div>
      <Person
        name="MarianoGarcia"
        age={19}
        hobbies={["Mtb", "coding", "skiing", "family"]}
      />
      <Person
        name="PamelaAnderson"
        age={24}
        hobbies={["reading", "movies", "concerts"]}
      />
      <Person
        name="RoyTuy"
        age={17}
        hobbies={["friends", "dog walking", "beach relaxing", "surfing"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

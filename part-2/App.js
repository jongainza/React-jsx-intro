const App = (props) => {
  return (
    <div>
      <Tweet
        username="jon6566"
        user="Jon"
        date={new Date().toDateString()}
        message="I'm new into React"
      />
      <Tweet
        username="bianca123"
        user="Blanca"
        date={new Date().toDateString()}
        message="I can help you with this 🏓"
      />
      <Tweet
        username="jon6566"
        user="Jon"
        date={new Date().toDateString()}
        message="That will be awsome!!"
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

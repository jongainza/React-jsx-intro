const Person = (props) => {
  let response;
  if (props.age >= 18) {
    response = "Please go vote";
  } else {
    response = "You must be 18";
  }
  let name;
  if (props.name.length > 8) {
    name = props.name.slice(0, 6);
  } else {
    name = props.name;
  }
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>
        <b>name:</b> {name}
      </p>
      <p>
        <b>age:</b> {props.age}.{response}
      </p>
      <p>
        <b>hobbies:</b>
      </p>
      <ul>
        {props.hobbies.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
};

const Tweet = (props) => {
  return (
    <div>
      <h3>Tweet by: {props.username}</h3>
      <h2>user: {props.user}</h2>
      <p>date: {props.date} </p>
      <h1>message: {props.message}</h1>
    </div>
  );
};

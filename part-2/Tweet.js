const Tweet = (props) => (
  <div className="tweet">
    <span className="username">Username: {props.username} </span>
    <span>Name: {props.name} </span>
    <span className="date">Date: {props.date} </span>
    <p>Message: {props.message}</p>
  </div>
)
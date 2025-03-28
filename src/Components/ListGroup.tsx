import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  const item = ["New York", "Tokyo", "Colombo", "London", "Paris"];

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {item.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;

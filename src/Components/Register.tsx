function Register() {
  const items = ["New York", "Ethiopia", "Canada", "USA", "Kuwait"];
  return (
    <div>
      <h1> List Items </h1>
      <ul className="list-group">
        {items.map((items) => (
          <li
            className="list-group-item"
            key={items}
            onClick={() => console.log(items)}
          >
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Register;

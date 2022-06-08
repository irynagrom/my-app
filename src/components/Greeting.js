// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from "react";

function Greeting() {
  // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  const [greeting, setGreeting] = useState(
    "Welcome the following students to class!"
  );

  const [group, setGroup] = useState(["Jacob", "Ashley", "Andy"]);
  const handleAdd = () => {
    setGroup([...group, "Kaia"]);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greeting}</p>
        <ul>
          {/* TODO: Fix the list below so that each member of your group is accessed from the `group` array */}
          <li>{group[0]}</li>
          <li>{group[1]}</li>
          <li>{group[2]}</li>
          <li>{group[3]}</li>
          <button onClick={handleAdd}>Add a person</button>
        </ul>
      </div>
    </div>
  );
}

export default Greeting;

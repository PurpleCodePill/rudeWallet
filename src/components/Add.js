import React, { useState } from "react";
import Popup from "reactjs-popup";

function Add(props) {
  const [name, setName] = useState();
  const [budget, setBudget] = useState(0);
  const [spent, setSpent] = useState(100);

  return (
    <div>
      <Popup trigger={<button className="button"> Open Modal </button>} modal>
        {(close) => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header">
              <h2 className="text-xl border-4 border-green-500">
                Wanna add new category , hmm, lets see how you manage stuff this
                time....
              </h2>{" "}
            </div>
            <div className="bg-blue-400 text-l">
              <form onSubmit={props.handleSubmit(name, spent, budget)}>
                <label>
                  Category Name :
                  <input
                    type="text"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>
                <br></br>
                <label>
                  Your planned budget:
                  <input
                    type="number"
                    name="budget"
                    onChange={(event) => setBudget(event.target.value)}
                  />
                </label>
                <br></br>
                <label>
                  Amount already spent:
                  <input
                    type="number"
                    name="spent"
                    onChange={(event) => setSpent(event.target.value)}
                  />
                </label>
                <input type="submit" value="Confirm" />
              </form>
            </div>
            {/*  */}
          </div>
        )}
      </Popup>
    </div>
  );
}

export default Add;

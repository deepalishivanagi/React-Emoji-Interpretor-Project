import { useState } from "react";
import "./styles.css";

export function InputText() {
  var [meaning, setmeaning] = useState("Meaning will appear here");
  var FlagDictionary = {
    "🧗‍♂️": "Man Climbing",
    "🤺": "Person Fencing",
    "⛷️": "Skier",
    "🏄‍♀️": "Woman surfing",
    "🚴‍♀️": "Woman Biking",
    "🤸‍♂️": "Men cartwheeling"
  };

  // const sportList = ["🧗‍♂️", "🤺", "⛷️", "🏄‍♀️", "🚴‍♀️", "🤸‍♂️"];
  const sportList = Object.keys(FlagDictionary);

  function OnchnageInput(event) {
    // console.log(event.target.value);
    var val = event.target.value;
    if (val in FlagDictionary) {
      setmeaning(FlagDictionary[val]);
    } else {
      setmeaning("Not found in our dectionary");
    }
  }

  function OnClickHandler(items) {
    console.log(items);
    setmeaning(FlagDictionary[items]);
  }

  return (
    <div className="AppI">
      <input
        placeholder="Enter your input or click on below emojis"
        onChange={OnchnageInput}
      ></input>
      <h3 style={{ fontStyle: "italic" }}>{meaning}</h3>
      {/* <h2>Hello {userdata}</h2> */}

      <h2>Sports list</h2>
      <ul>
        {sportList.map(function (item, index) {
          // console.log(item, index);
          return (
            <li
              key={item}
              onClick={function A() {
                OnClickHandler(item);
              }}
            >
              {item}
            </li>
          );
          // style={{ display: "inline"}}
        })}
      </ul>
    </div>
  );
}

import "./styles.css";
import { LikeButton } from "./Like.js";
import { InputText } from "./Input.js";

export default function App() {
  var username = "Deepali";

  return (
    <div className="App7">
      <div>
        <h1 style={{ color: "blue" }}>
          Welcome <span style={{ color: "red" }}>{username}</span>
        </h1>
        <InputText />
      </div>
      <div>
        <LikeButton />
      </div>
    </div>
  );
}

export function App2() {
  var username = "Manjunath";

  return (
    <div className="App7">
      <div>
        <h1 style={{ color: "blue", display: "inline" }}>
          Welcome <span style={{ color: "red" }}>{username}</span>
        </h1>
      </div>
      <div>
        <LikeButton />
      </div>
    </div>
  );
}

// function col(username){
//   if(username=="Deepa")
//   {
//     colour="red";
//   }
//   else
//   {
//     colour="black";
//   }
//    return colour;
// }

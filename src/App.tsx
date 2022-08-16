import React, { useState } from "react";
import Alert from "./Alert";
import Chip from "./Chip";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";
import Spinner from "./Spinner";
import List from "./List";
import Range from "./Range";
import { toRGBA } from "./utils/colors";

function App() {
  const [open, isOpen] = useState(true);

  const handleClose = () => {
    isOpen(false);
  };

  console.log(toRGBA("rgb(11,22,33)", "0,5"));

  const items = [
    { title: "Item 1", avatar: { name: "eugene" } },
    { title: "Item 2", avatar: { name: "Dorina Costin" } },
    {
      title: "Item 3",
      avatar: {
        name: "John Johnson",
        imgSrc:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",
      },
    },
  ];

  const itemsOld = [
    { title: "Item 1" },
    { title: "Item 2" },
    {
      title: "Item 3",
    },
  ];
  /*
  const StyledList = styled(List)`  font-size: 10px;  .ko-list-item {     padding: 10px;  }`
*/

  return (
    <div className="App">
      <header className="App-header">
        <Chip>UI design</Chip>
        <div style={{ width: "60%", marginTop: "50px" }}>
          <Range step={10} min={10} max={110} />
        </div>
        <div style={{ width: "60%", marginTop: "50px" }}>
          {open && (
            <Alert
              color="warning"
              onClose={handleClose}
              heading="Oh, vivamus vulputate neque"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Alert>
          )}
        </div>
        <div style={{ width: "60%", marginTop: "50px" }}>
          <Avatar
            name="Ana"
            color="error"
            imgSrc="https://www.gravatar.com/ava"
          />
        </div>
        <div style={{ width: "60%", marginTop: "50px" }}>
          <ProgressBar value={80} color="info" showValue={true} />
        </div>
        <div style={{ width: "60%", marginTop: "50px" }}></div>
        <div style={{ width: "60%", marginTop: "50px" }}>
          <Spinner color="info" size="xl" />
        </div>
        <div style={{ width: "60%", marginTop: "50px" }}></div>
      </header>
    </div>
  );
}

export default App;

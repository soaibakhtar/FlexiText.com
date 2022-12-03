import React, {useState} from "react";

export default function TextFrom(props) {

    const handelUpClick = () => {
    // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handelLoClick = () => {
    // console.log("Uppercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handelOnClear = () => {
    // console.log("Uppercase was clicked")
        let newText ="";
        setText(newText)
    }
    const handelCapClick = () => {
    // console.log("Uppercase was clicked")
    let arr = text.split(" ");
    // console.log(arr)
    for(let i=0;i<arr.length;i++)
    {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    };
    
    let newText = arr.join(" ");

        setText(newText)
    }

    const handelOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text,setText] = useState("Enter text here")
  return (
    <>
    <div className="container">
      <h1 className="my-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          onChange={handelOnChange}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handelLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handelCapClick}>Capitalize Word</button>
      <button className="btn btn-primary mx-1" onClick={handelOnClear}>Clear</button>
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

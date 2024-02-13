import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was click")
    let newtext = text.toUpperCase();
    setText (newtext);
    props.showAlert("Converted to uppercase!", "primary");
  }
  const handleLowercase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "danger");
  }
  let handleCountlatter = ()=>{
    let newcount = String(text.length);
    setText(newcount);
    props.showAlert("Count a Latters!!", "warning");
  }
  let handleCleartext=()=>{
    setText("");
    props.showAlert(" Text Cleared", "success");
  }

  let handleCopytext = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipdboard..", "secondary");
  }

  let speaktext = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking...", "info");
  }
  
  const handleOnChange = (event)=>{
    // console.log("on change")
    // console.log(event)
    setText(event.target.value)
  }



const [text, setText] = useState('Enter the text here'); 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}> Uppercase</button>
        <button className="btn btn-danger mx-1" onClick={handleLowercase}> Lowercase</button>
        <button className="btn btn-warning mx-1" onClick={handleCountlatter}> Count Text</button>
        <button className="btn btn-success mx-1" onClick={handleCleartext}> Clear Text</button>
        <button className="btn btn-secondary mx-1" onClick={handleCopytext}> Copy Text</button>
        <button className="btn btn-info mx-1" onClick={speaktext}> Speak</button>
    </div>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>Word Counter</h1>
        <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2> Preview </h2>
        <p>{text.length > 0 ? text : "Enter somthing in Textbox above to preview here"}</p>
        </div>

    </>
  )
}

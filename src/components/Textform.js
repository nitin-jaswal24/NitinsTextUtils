import React ,{useState}from 'react'

export default function Textform(props) {
    //make the function for handle the upper click
    const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case ","Success")

    }

    //when i update the text then it will change

    const handleOnchange= (event)=>{
        setText(event.target.value) 
    }

    const handleDownclick = () => {
      if(text===''){
        {window.alert("Fill something")}
      }
        else if (text.length > 0 && text[0] === text[0].toLowerCase()) {
          props.showAlert("It is already in lowercase");
        } else {
          let newText = text.toLowerCase();
          setText(newText);
          props.showAlert("Converted to lowercase", "Success");
        }
      };
      
      
    
    
    const handleCopy=()=>{
        var text=document.getElementById('floatingTextarea')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","Success ")

    }
    
    const handleClear=()=>{
        var text=document.getElementById('floatingTextarea')
        setText('');
        props.showAlert("text cleared "," Success");
        
        
    }
    const handleCut=()=>{
        var text=document.getElementById('floatingTextarea');
        text.select();
        navigator.clipboard.writeText(text.value);
        setText('');
        props.showAlert("text has been cut "," Success ");
        
        
    }




    const [text,setText]=useState('')//this "enter text here is the value that is inside the textarea and this set text "
    // is the functin 
    // text="Nitin"   //this is the wrong way to change the state correct way is 
    // setText("this text"); this will set the value of the text area 
  return (
<>
    <div className="container">

        <h3>{props.heading}</h3>
    <div className="form-floating">
    <textarea className="form-control" id="floatingTextarea" onChange={handleOnchange} value={text}  style={{
    backgroundColor: props.mode === 'light' ? 'white' : '#343a40',
    color: props.mode === 'light' ? '#000000' : '#ffffff',
  }}></textarea>

  <button className="btn btn-primary"  onClick={handleUpclick}>
     Convert to uppercase
  </button>
  <button className="btn btn-secondary"  onClick={handleDownclick}>
     Convert to lower case
  </button>
  <button className="btn btn-secondary"  onClick={handleCopy}>
     Copy to clipboard
  </button>
  <button className="btn btn-secondary"  onClick={handleClear}>
     Clear Text
  </button>
  <button className="btn btn-secondary"  onClick={handleCut}>
     cut text
  </button>
  </div>
    </div>


<div className="container my-2">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length-1} words  and  {text.length} characters</p>

    <h3>Preview</h3>
    <p className='preview my-2' style={{ wordWrap: 'break-word' }}>{text}</p>
</div>
</>
  )
}

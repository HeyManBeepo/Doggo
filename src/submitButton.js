import React, {useState} from 'react';
import dogVideo from './golden.gif';
class SubmitButton extends React.Component{
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
  constructor(props){
    super(props);
    this.state = {
      answer : '$30',
      submitted : 'false',
      answer2 : 'treato',
    }
  }
    onChange = (e) => {
      this.setState({answer: e.target.value});
    }
    onChange2 = (e) => {
      this.setState({answer2: e.target.value});
    }
    onSubmit = (e) => {
      this.setState({submitted : true});
      e.preventDefault();
    }
    render(){
      return (
        <form>
          <label>
            Email the question??!? Need to type in $30 first plz gimme some treats.
            <input type = "text" name = "name" onChange = {(event) => {this.onChange(event)}} />
          </label>
      {this.state.answer == "$30" ? <div><h1> Corect!</h1><img src = {dogVideo} /></div> : <h2>False!</h2>}
      <button onClick={(event) => this.onSubmit()}>
        Submit
      </button>
      <label> 
        Thamks for the 30$. Gimme a treato now.
        <input type = "text" name = "name" onChange = {(event) => {this.onChange(event)}} />
        </label>
        <button onClick={(event) => this.onSubmit()}>
        Submit
      </button>
        Treato.
        {this.state.answer2 == "treato"? <div><h1> Yum ha</h1><img src = {dogVideo} /></div> : <h2>False!</h2>}
      <label> 
        Hee hee hee haw.
      </label>
      </form> 
    );
  };
};
export default SubmitButton;

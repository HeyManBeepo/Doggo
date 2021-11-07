import React from 'react';
class SubmitButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    constructor(props) {
      super(props);
      this.state = {
          value: 'fartpoop',
          isCorrectAnswer: true,
      }
    };
    correctAnswer = '$30';
    onChange = (event) => {
      this.setState({ value: event.target.value});
  }
    onSubmit = (event) => {
      const { value } = this.state;
      event.preventDefault();
      console.log(this.state.value);
      console.log(value);
      (this.state.value == this.correctAnswer ? this.setState({isCorrectAnswer: true}) : this.setState({isCorrectAnswer: false})) 
  }
    
  render() {
    return (
      <form>
          <label>
            Email the question??!? Need to type in $30 first plz gimme some treats.
            <input type = "text" name = "name" onChange = {(event) => {this.onChange(event)}} />
          </label>
          <button onClick={(event) => {this.onSubmit(event)}}>
        Submit
      </button>
      {this.state.isCorrectAnswer ? <h1> Corect!</h1> : <h2>False!</h2>}
      
      
        </form>
    );
  }
}
export default SubmitButton;
 

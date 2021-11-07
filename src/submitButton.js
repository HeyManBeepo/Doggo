import React from 'react';
class SubmitButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    constructor(props) {
      super(props);
      this.state = {
          value: ''
      }
    };
    onChange = event => {
      this.setState({ value: event.target.value});
  }

    onSubmit = event => {
      const { value } = this.state;
      event.preventDefault();
      console.log(value);
  }
    
  render() {
    return (
      <form>
          <label>
            Email the question??!?
            <input type = "text" name = "name" />
          </label>
          <button onClick={(event) => {this.onSubmit(event)}}>
        Submit
      </button>
        </form>
    );
  }
}
export default SubmitButton;
 

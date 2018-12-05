import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      title: '',
      body: '',
      // id: 0,
      done: false
    };
  }
  
  update(type){
    
    return e => {
      // console.log(e.target.value)
      this.setState({[type]: e.target.value});
    };
  }
  
  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.setState({id: new Date().getTime()});
    this.props.receiveTodo(this.state);
  }
  
  render() {
    // console.log(this.state)
    // debugger
    return (
      <form className='todo-form' onSubmit={(e) => this.handleSubmit(e)}>
        <label> Title
          <input type="text" onChange={this.update('title')}/>
        </label>
        <label> Body
          <input type="text" onChange={this.update('body')}/>
        </label>
        <button type="submit" name="button">Submit Todo</button>
      </form>
    );
  }
  
}




export default TodoForm;



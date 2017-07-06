import React from 'react';

export default class addTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }

  handleCreate(event) {
    event.preventDefault();
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);
    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }
    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  renderError() {
    if (!this.state.error) { return null; }
    return <div style={{ color: 'red' }}>{this.state.error}</div>
  }

  validateInput(task) {
    if (!task) {
      return 'please enter a task'
    } else if (_.find(this.props.tasks, todo => todo.task === task)) {
      return 'task already exists';
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <form onSubmit={this.handleCreate.bind(this)}>
          <input placeholder="Add a task here!" ref="createInput" type="text" />
          <button className="btn">
            <span className="glyphicon glyphicon-plus-sign"></span> add task
          </button>
            {this.renderError()}
        </form>
      </div>
    );
  }
}

import React from 'react';

export default class TaskListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  cancelClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onEditClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onSaveClick() {
    event.preventDefault();
    const oldTask = this.props
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false })
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <div>
          <button className="btn" onClick={this.onSaveClick.bind(this)}><span className=" glyphicon glyphicon-ok-circle"></span> update </button>
          <button className="btn" onClick={this.cancelClick.bind(this)}><span className=" glyphicon glyphicon-ban-circle"></span> cancel</button>
        </div>
      );
    }
    return (
      <div>
        <button className="btn" onClick={this.onEditClick.bind(this)}><span className=" glyphicon glyphicon-erase"></span> edit </button>
        <button className="btn" onClick={this.props.deleteTask.bind(this, this.props)}><span className="glyphicon glyphicon-remove-circle"></span> delete</button>
      </div>
    );
  }

  renderTaskSection() {
    const task = this.props.task;
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.onSaveClick.bind(this)}>
          <div className="media-body">
            <input type="text" defaultValue={task} ref="editInput" />
          </div>
        </form>
      )
    }
    return (
      <div className="media-body">
        {task}
      </div>
    );
  }

  render() {
    return (
        <li className="task-list-entry media">
          {this.renderTaskSection()}
          {this.renderActionSection()}
       </li>
    );
  }
}

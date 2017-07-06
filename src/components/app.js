import _ from 'lodash';
import AddTask from './addTask';
import React from 'react';
import TaskList from './taskList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    fetch('/api/tasks')
    .then((res) => res.json())
    .then((res) => {
      res.forEach((task) => {
        this.state.tasks.push({
          task: task.task,
          _id: task._id
        });
      })
      this.setState({ tasks: this.state.tasks })
    })
    .catch((err) => {
      console.error('here is the error: ', err);
    })
  }

  createTask(task) {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: task
      })
    })
    .then((res) => res.json())
    .then((res) => {
      this.state.tasks.push({
        task: res.task,
        _id: res._id
      });
      this.setState({ tasks: this.state.tasks })
    })
    .catch((err) => {
      console.error('here is the error: ', err);
    })
  }

  deleteTask(taskToDelete) {
    let deleted;
    fetch('/api/tasks/' + taskToDelete._id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((res) => {
        this.state.tasks.forEach(function(todo, i) {
          if (todo.task === taskToDelete.task) {
            deleted = i;
            return;
          }
        })
        this.state.tasks.splice(deleted, 1);
        this.setState({ tasks: this.state.tasks });
      })
  }

  saveTask(oldTask, newTask) {
    const foundTask = _.find(this.state.tasks, todo => todo.task === oldTask.task);
    fetch('/api/tasks/' + oldTask._id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task: newTask,
          _id: oldTask._id
        })
      })
      .then((res) => res.json())
      .then((res) => {
        foundTask.task = newTask;
        this.setState({ tasks: this.state.tasks });
      })
  }

  toggleTask(task) {
    const foundTask = _.find(this.state.tasks, todo => todo.task === task);
    foundTask.isCompleted = !foundTask.isCompleted;
    this.setState({ tasks: this.state.tasks })
  }

  render() {
    return (
    <div id="app container" >
      <h1>React Tasks!</h1>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <AddTask
              tasks={this.state.tasks}
              createTask={this.createTask.bind(this)}
             />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <TaskList
                deleteTask={this.deleteTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                toggleTask={this.toggleTask.bind(this)}
                tasks={this.state.tasks}
              />
          </div>
      </div>
    </div>
    );
  }
}

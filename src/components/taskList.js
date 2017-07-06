import _ from 'lodash';
import React from 'react';
import TaskListEntry from './taskListEntry';

export default class TaskList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.tasks, (task, i) => <TaskListEntry key={i} {...task} {...props} /> )
  }
  render() {
    return (
      <ul className="task-list">
          {this.renderItems()}
      </ul>
    );
  }
}

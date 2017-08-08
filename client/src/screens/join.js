import React, { Component } from 'react';
import uuid from 'uuid';

function foo(e) {
  e.preventDefault();
  console.log(uuid());
  console.log(e);
}

class Join extends Component {
  render() {
    return (
      <div>
        <h1>
          Celebrity!
        </h1>
        <form onSubmit={foo} >
          <label>
            Name:
            <input name="username" />
            <input type="submit" />
          </label>
        </form>
      </div>
    );
  }
}

export {Join};

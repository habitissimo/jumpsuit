import React from 'react'
import createReactClass from 'create-react-class'
import { Link } from 'jumpsuit'
//
export default createReactClass({
  render() {
    return (
      <div className='Welcome'>
        <p>
          To get started, edit files in <code>src</code> and save to reload.
        </p>
        <Link to='/counter'>Go To Counter</Link>
      </div>
    )
  }
})

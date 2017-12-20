import React, { Component } from 'react';
import './AddMessage.css';
import { connect } from 'react-redux';
import { addEventName } from '../../actions';

class AddMessage extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    this.setState({title: event.target.value})
  }

  submitEventName = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.title, this.props.eventName.length)
  }

  render() {
    return(
      <div className='add-message-container'>
        <h1>AddMessage!</h1>
        <form onSubmit={this.submitEventName}>
          <input type='text'
                  placeholder='Event Name'
                  value={this.state.title}
                  onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('MSP', state);
  return { eventName: state.eventName }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (title, id) => {
      console.log('MDP',title, id);
      dispatch(addEventName(title, id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);
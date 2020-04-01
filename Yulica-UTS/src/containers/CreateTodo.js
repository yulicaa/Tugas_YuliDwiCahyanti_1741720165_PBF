import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action/actionCreator'
import { bindActionCreators } from 'redux'
import '../App.css'

class CreateTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todotext: '',
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e) {
        this.setState({
            todotext: e.target.value
        })
    }

    render() {
        return (
            <div className="inidiganti">
                <div className="nama">
                    <input onChange={this.onChangeTodoText} value={this.state.todotext}
                        type="text" className="text" id="inputEmail3" placeholder="add todo here" />
                    <button type="button" onClick={() => { this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) }} 
                        style={{ marginLeft: "25px", marginRight: "15px" }} className="btn btn-success">Add Todo</button>
                    <button type="button" onClick={() => this.setState({ todotext: '' })}
                         className="btn btn-danger">Cancel</button>
                    
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(CreateTodo) 
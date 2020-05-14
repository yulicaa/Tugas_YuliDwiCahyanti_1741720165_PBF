import React, { Component } from "react";
import "./ToDoForm.css";
import Firebase from "../firebase/config";

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: "",
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  handleLogoutAccount() {
    const user = Firebase.auth().currentUser;
    try {
      alert("Goodbye: " + user.email);
    } catch (e) {
      alert(e);
    }
  }

  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value,
    });
  }

  writeNote() {
    if (this.state.newNoteContent.length === 0) {
      alert("Error: Note Empty");
    } else {
      this.props.addNote(this.state.newNoteContent);
    }

    this.setState({
      newNoteContent: "",
    });
  }

  render() {
    return (
          <div className="formWrapper">
          <h2>What Must You Do?</h2>
          <input
            className="noteInput"
            placeholder="Write a new note..."
            value={this.state.newNoteContent}
            onChange={this.handleUserInput}
          />
          <button className="noteButton" onClick={this.writeNote}>
            Add Note
          </button>
          </div>
    );
  }
}

export default ToDoForm;

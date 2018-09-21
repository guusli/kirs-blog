import React from "react";
import Modal from "react-modal";

export default class CustomModal extends React.Component {
  state = {
    open: true
  };
  render() {
    return (
      <Modal {...this.props} isOpen={true}>
        {this.props.children}
      </Modal>
    );
  }
}

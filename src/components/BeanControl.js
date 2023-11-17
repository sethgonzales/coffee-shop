import React from "react";
import NewBeanForm from "./NewBeanForm";
import BeanList from "./BeanList";
import BeanDetail from "./BeanDetail";
import EditBeanForm from "./EditBeanForm";

class BeanControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeanList: [],
      selectedBean: null,
      editing: false
    };
  }

  //New Bean


  //Edit Bean


  //View Bean


  //Vis Button


  //To Render
  render() {
    let currentVisibleState = null;
    let buttonText = null;

    //Check Editing State
    if (this.state.editing) {
      currentVisibleState = (
        <EditBeanForm
          bean={this.state.selectedBean}
          onEditBean={this.handleEditingBeanInList} />
      );
      buttonText = "Return to Bean List";

      //Check Selected Bean (Bean Detail) State
    } else if (this.state.selectedBean != null) {
      currentVisibleState =
        <BeanDetail
          bean={this.state.selectedBean}
          onClickingDelete={this.handleDeletingBean}
          onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Bean List";
    
      //Check Form Visible (New Bean) State
    } else if (this.state.formVisibleOnPage) {

    }
  }
}
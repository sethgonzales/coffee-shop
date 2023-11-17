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
  handleAddingNewBeanToList = (newBean) => {
    const newMainBeanList = this.state.mainBeanList.concat(newBean);
    this.setState({ mainBeanList: newMainBeanList, formVisibleOnPage: false });
  }

  //Edit Bean
  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingBeanInList = (beanToEdit) => {
    const editedMainBeanList = this.state.mainBeanList
      .filter(bean => bean.id !== this.state.selectedBean.id)
      .concat(beanToEdit);
    this.setState({
      mainBeanList: editedMainBeanList,
      editing: false,
      selectedBean: null
    });
  }

  //View Bean
  handleChangingSelectedBean = (id) => {
    const selectedBean = this.state.mainBeanList
      .filter(bean => bean.id === id)[0];
    this.setState({
      selectedBean: selectedBean
    })
  }

  //Delete Bean
  handleDeletingBean = (id) => {
    const newMainBeanList = this.state.mainBeanList
      .filter(bean => bean.id !== id);
    this.setState({
      mainBeanList: newMainBeanList,
      selectedBean: null
    });
  }

  //Visability Button
  handleClick = () => {
    if (this.state.selectedBean != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBean: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

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
      buttonText = "Return to Inventory";

      //Check Selected Bean (Bean Detail) State
    } else if (this.state.selectedBean != null) {
      currentVisibleState =
        <BeanDetail
          bean={this.state.selectedBean}
          onClickingDelete={this.handleDeletingBean}
          onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Inventory";

      //Check Form Visible (New Bean) State
    } else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewBeanForm onNewBeanCreation={this.handleAddingNewBeanToList} />;
      buttonText = "Return to Inventory";

      //Show List of Beans
    } else {
      currentVisibleState = <BeanList beanList={this.state.mainBeanList} onBeanSelection={this.handleChangingSelectedBean} />;
      buttonText = "Add to Inventory"
    }

    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default BeanControl;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Icons
import { IoMdAdd as AddIcon } from 'react-icons/io';
// Components
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import CardEditor from './CardEditor';
import Menu from './Menu';
import Form from './Form';
import Button from './Button';

/*
 * TODO: Create the CardsList component
 *
 * Requirements:
 * - Must be named CardsList
 * - Must be a class component
 * - Should render a <div> element as the container for the card
 * - Should render the tags list at the top of the card content
 * - Should render the card number and description below the tags
 *
 * Tips:
 * - You can use the 'card' CSS class for styling
 *
 */
class CardsList extends Component {
  constructor(props) {
    super(props);

    // CardsList state
    this.state = {
      creatingNewCard: false,
      editCardId: null,
      editCardText: '',
      editCardTags: [],
    };

    // TODO: Define all the card actions here
    this.actions = [
      [
        {
          title: 'Add Card...',
          onClick: () => null, // TODO
        },
        {
          title: 'Copy List...',
          onClick: () => null, // TODO
        },
      ],
      [
        {
          title: 'Move All Cards in This List...',
          onClick: () => null, // TODO
        },
        {
          title: 'Archive All Cards in This List...',
          onClick: () => null, // TODO
        },
      ],
      [
        {
          title: 'Archive This List',
          onClick: () => null, // TODO
        },
      ],
    ];

    // TODO: Bind your class methods here
    // ...
  }

  // TODO: implement the handleAddNewCard method to add a new card to the list.
  // Tips:
  // - Call the `this.props.onAddCard` function to add a new card
  // - Use the `this.setState` method to update the state in order to close the card creation form
  handleAddNewCard = (cardText = '') => {
    this.props.onAddCard(this.props.id, cardText);
    this.setState({ creatingNewCard: false });
  };

  // TODO: implement th e handleCancelNewCard method.
  // Tips:
  // - Use the `this.setState` method to update the state in order to close the card creation form
  handleCancelNewCard() {}

  // TODO: implement the handleCreateNewCard method.
  // Tips:
  // - Use the `this.setState` method to update the state in order to open the card creation form
  handleCreateNewCard = () => {
    this.setState({ creatingNewCard: true });
  };

  // TODO: implement the handleEditCard method.
  // Tips:
  // - Use the `this.setState` method to update the text and tags values of the editing from
  handleEditCard(id, text, tags) {}

  // TODO: implement the handleCancelEdit method.
  // Tips:
  // - Use the `this.setState` method to reset and close the editing form
  handleCancelEdit() {}

  // TODO: implement the handleCopyCard method.
  // Tips:
  // - Call the `this.props.onCopyCard` function to clone a card
  // - Do not forget to reset and close the editing form
  handleCopyCard() {}

  // TODO: implement the handleArchiveCard method.
  // Tips:
  // - Call the `this.props.onRemoveCard` function to remove a card form the list
  // - Do not forget to reset and close the editing form
  handleArchiveCard() {}

  // TODO: implement the handleSaveCard method.
  // Tips:
  // - Call the `this.props.onEditCard` function to save changes on the card
  // - Do not forget to reset and close the editing form
  handleSaveCard(text) {}

  // TODO: implement the handleRemoveTag method.
  // Tips:
  // - Call the `this.props.onRemoveTag` function to remove a tag from a card
  handleRemoveTag(tagId) {}

  // TODO: implement the handleAddTag method.
  // Tips:
  // - Call the `this.props.onAddTag` function to add a tag to a card
  handleAddTag(text) {}

  // TODO: implement the renderHeader method to render the list header UI.
  // Tips:
  // - Should render a h3 tag for the list title
  // - Should render a Menu component
  // - Should render the number of cards in the list
  //
  // [BONUS]:
  // - Add a drag handle to the list header so that user can grab the list and drag it around
  // (using the dragHandleProps)
  renderHeader() {
    const numberOfCards = this.props.cards.length;

    return (
      <div className="cards-list-header">
        <div className="cards-list-title">
          <h3>{this.props.title} </h3>

          <Menu
            isMenuOpen={this.props.isMenuOpen}
            onClick={this.props.onToggleMenu}
            actions={this.actions}
          />
        </div>
        <p>{`${numberOfCards} cards`}</p>
      </div>
    );
  }

  // TODO: implement the renderCards method to render the cards.
  // Tips:
  // - Iterate through this.props.cards to render each Card
  //
  // [BONUS]:
  // - Wrap the cards inside the <Droppable> component
  // --> https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md
  // - Add the droppableId prop to it (should be the list ID)
  // - Add the direction prop to it (should be 'vertical')
  // - Add the type prop to it (should be 'card')
  // - Add the children function that returns your cards and bind everything together
  // --> https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md#children-function
  renderCards() {
    const renderCard = this.props.cards.map((card) => <Card {...card} />);
    return <ol className="cards">{renderCard}</ol>;
  }

  // TODO: implement the renderFooter method to render the list footer UI.
  // Tips:
  // - Should render either a Form component to create a new card
  // or a button to trigger the card creation mode (creatingNewCard)
  renderFooter() {
    return this.state.creatingNewCard ? (
      <Form
        type="editor"
        placeholder="Enter a title for this card..."
        // onAddCard={this.props.onAddCard}
        handleAddNewCard={this.handleAddNewCard}
      />
    ) : (
      <Button
        onClick={this.handleCreateNewCard}
        className="add-card-button add-button"
        text="Add a new card"
      />
    );
  }

  // TODO: render the CardsList UI.
  //
  // [BONUS]:
  // - Wrap the cards list inside the <Draggable> component
  // --> https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md
  // - Add the draggableId prop to it (should be the list ID)
  // - Add the index prop to it (should be the list index)
  // - Add the children function that returns your cards list component and bind everything together
  // --> https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md#children-function-render-props--function-as-child
  render() {
    return (
      <div className="cards-list">
        {this.renderHeader()}
        {this.renderCards()}
        {this.renderFooter()}

        {/* render list footer */}

        {/* render card editor */}
      </div>
    );
  }
}

CardsList.defaultProps = {
  cards: null,
  isMenuOpen: false,
  onToggleMenu: () => null,
  onAddCard: () => null,
  onRemoveCard: () => null,
  onRemoveList: () => null,
  onRemoveAllCards: () => null,
  onCopyList: () => null,
  onMoveAllCards: () => null,
  onCopyCard: () => null,
  onEditCard: () => null,
  onRemoveTag: () => null,
  onAddTag: () => null,
};

CardsList.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  isMenuOpen: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onAddCard: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onRemoveList: PropTypes.func,
  onRemoveAllCards: PropTypes.func,
  onCopyList: PropTypes.func,
  onMoveAllCards: PropTypes.func,
  onCopyCard: PropTypes.func,
  onEditCard: PropTypes.func,
  onRemoveTag: PropTypes.func,
  onAddTag: PropTypes.func,
};

export default CardsList;

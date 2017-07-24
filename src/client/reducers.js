import { combineReducers } from 'redux';
import * as ACTIONS from './actions.js'
import startingBlueDeck from './decks/blue'
import startingGreenDeck from './decks/green'
import startingPurpleDeck from './decks/purple'
import startingRedDeck from './decks/red'
import startingMissionDeck from './decks/missions'
import startingAltarDeck from './decks/altar'


/* use a different combine Reducers so that they can access state
   this is the best solution I can think of to refer to other pieces of the state
   to get cards from different places */
function combineReducers(reducerObject) {
  // return a function that is called, and subsequently calls the reducer slices
  return (state = {}, action, state) => {
    result = {}
    for (let reducer in reducerObject) {
      result[reducer] = reducerObject[reducer](state[reducer], action, state, state);
    }
    return result;
  }
}


/* --- FUNCTIONS FOR SETTING UP INITIAL STATE --- */
function shuffleDeck(deck) {
  for (let i=deck.length - 1; i>0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let K = a[j];
    a[j] = a[i];
    a[i] = K;
  }
}

const cardDetails = {
  // get all the decks and shuffle them
  blue: shuffleDeck(startingBlueDeck),
  green: shuffleDeck(startingGreenDeck),
  purple: shuffleDeck(startingPurpleDeck),
  red: shuffleDeck(startingRedDeck),
  missions: shuffleDeck(startingMissionDeck),
  altar: shuffleDeck(startingAltarDeck)
}

function startingDecks() {
  // just the cardDetails indexes for each card (easier to manage)
  decks = {};
  for (key in cardDetails) {
    decks[key] = cardDetails[key].map( (val, idx) => idx)
  }
}

function defaultHands(players=['Lucy', 'Stephen']) {
  let result = {};
  for (let player in players) {
    result[player] = {...emptyObjectDivided};
  }
  return result
}

const emptyObjectDivided = {
  blue: [],
  green: [],
  purple: [],
  red: [],
  missions: [],
  altar: []
}


/* ---- REDUCERS ---- */
// note: whenever "taking" a card, take from the end (pop)
function cardDetails(stateSlice=cardDetails, action, state) {
  return state;
}

function decks(stateSlice=startingDecks(), action, state) {
  switch (action.type) {
    case ACTIONS.DRAW_CARD_TO_DISPLAYED:
      let newDeck = stateSlice[action.deck].slice();
      newDeck.pop();
      return Object.assign(stateSlice, {[action.deck]: newDeck});
    default:
      return stateSlice;
  }
}

function displayedCards(stateSlice={...emptyObjectDivided}, action, state) {
  switch(action.type) {
    case ACTIONS.DRAW_CARD_TO_DISPLAYED:
      let deck = state.decks[action.deck]
      let card = deck[deck.length - 1];
      let newDisplayed = stateSlice[action.deck].slice();
      newDisplayed.push(card);
      return Object.assign(stateSlice, {[action.deck]: newDisplayed})
    case ACTIONS.ADD_DISPLAYED_TO_HAND:
      let newDisplayed = stateSlice[action.deck].slice();
      newDisplayed.splice( newDisplayed.indexOf(action.card) );
      return Object.assign(stateSlice, {[action.deck]: newDisplayed});
    case ACTIONS.ADD_DISPLAYED_TO_DISCARD:
      let newDisplayed = stateSlice[action.deck].slice();
      newDisplayed.splice( newDisplayed.indexOf(action.card) );
      return Object.assign(stateSlice, {[action.deck]: newDisplayed});
    default:
      return stateSlice;
  }
}

function playerHands(stateSlice=defaultHands(), action, state) {
  switch(action.type) {
    case ACTIONS.ADD_DISPLAYED_TO_HAND:
      let newHand = stateSlice[action.player][action.deck].slice();
      newhands[action.deck].push(action.card);
      // return new object, that's a copy of the old except for this player
      // for the object nested under this player, give the new array for this deck
      return { ...stateSlice, [action.player]: {
        ...stateSlice[action.players], 
        [action.deck]: newHand
      }};
    case ACTIONS.PLAY_CARD:
      let newHand = stateSlice[action.player][action.deck].slice();
      newHand.pop();
      return { ...stateSlice, [action.player]: {
        ...stateSlice[action.players], 
        [action.deck]: newHand
      }};
    default: 
      return stateSlice;
  }
}

function playedCards(stateSlice={...emptyObjectDivided}, action, state) {
  switch(action.type) {
    case ACTIONS.PLAY_CARD:
      let newPlayed = stateSlice[action.deck];
      newPlayed.push(action.card);
      return Object.assign(stateSlice, {[action.deck]: newPlayed});
    default:
      return stateSlice;
  }
}

function discardedCards(stateSlice={...emptyObjectDivided}, action, state) {
  switch(action.type) {
    case ACTIONS.ADD_DISPLAYED_TO_DISCARD:
      let newDiscarded = stateSlice[action.deck];
      newDiscarded.push(action.card);
      return Object.assign(stateSlice, {[action.deck]: newDiscarded});
    default:
      return stateSlice;
  }
}

const allHandsCollapsed = {
  'Stephen': true,
  'Lucy': true
}
function collapsedHands(state={...allHandsCollapsed}, action) {
  switch(action.type) {
    case ACTIONS.COLLAPSE_ALL_HANDS:
      return {...allHandsCollapsed}
    case ACTIONS.EXPAND_HAND:
      return { ...allHandsCollapsed, [action.player]: false }
    default:
      return state;
  }
}

// combine reducers
// use shorthand for {decks: decks, etc.}
export default combineReducers({
  cardDetails,
  decks,
  displayedCards,
  playerHands,
  playedCards,
  discardedCards,
  collapsedHands
})


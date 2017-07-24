import * as ACTIONS from './actions';

export function drawCardToDisplayed(whichDeck) {
  return {
    type: ACTIONS.DRAW_CARD_TO_DISPLAYED,
    deck: whichDeck
  }
}

export function addDisplayedToHand(whichCard, whichDeck, whichPlayer) {
  return {
    type: ACTIONS.ADD_DISPLAYED_TO_HAND,
    card: whichCard,
    deck: deck,
    player: whichPlayer
  }
}

export function addDisplayedToDiscard(whichCard, whichDeck) {
  return {
    type: ACTIONS.ADD_DISPLAYED_TO_DISCARD,
    card: whichCard,
    deck: whichDeck
  }
}

export function playCard(whichCard, whichPlayer) {
  return {
    type: ACTIONS.PLAY_CARD,
    card: whichCard,
    player: whichPlayer
  };
}

export function collapseAllHands() {
  return {
    type: ACTIONS.COLLAPSE_ALL_HANDS
  };
}

export function expandHand(whichPlayer) {
  return {
    type: ACTIONS.EXPAND_HAND,
    player: whichPlayer
  }
}
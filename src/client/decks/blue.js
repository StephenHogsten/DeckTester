import card from './card';

export default (function() {
  let deck = [];

  deck.push(card('wave', 'push one player 2 spaces away', '1 blue', 'blue'));
  deck.push(card('wave', 'push one player 2 spaces away', '1 blue', 'blue'));
  deck.push(card('tidal wave', 'push one player as far as you want', '3 blue + 1 anything', 'blue'));
  deck.push(card('whirlpool', 'anyone within 5 spaces rotates the rest of their moves clockwise', '2 blue', 'blue'));
  deck.push(card('whirlpool', 'anyone within 5 spaces rotates the rest of their moves clockwise', '2 blue', 'blue'));
  deck.push(card('flood', 'any further moves that move more than one space are reduced by one', '2 blue', 'blue'));
  deck.push(card('rain', 'any other blue spells this turn cost 2 blue less (minimum 1)', '1 blue', 'blue'));
  deck.push(card('ice', 'continue in current direction until you hit something', '2 blue + 1 anything', 'blue'));
  deck.push(card('ice', 'continue in current direction until you hit something', '2 blue + 1 anything', 'blue'));
  deck.push(card('lily pad - hop two extra in any direction', '2 blue + 1', 'blue'));
  deck.push(card('lily pad - hop two extra in any direction', '2 blue + 1', 'blue'));

  return deck;
})();
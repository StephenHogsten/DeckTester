import card from './card';

export default (function() {
  let deck = [];

  deck.push(card('teleport', 'roll the dice (first) then teleport yourself or one of the wizards to that spot', '1 purple + 1 anything', 'purple'));
  deck.push(card('teleport', 'roll the dice (first) then teleport yourself or one of the wizards to that spot', '1 purple + 1 anything', 'purple'));
  deck.push(card('time rewind', 'add an extra move card and redraw your dust (including what you spent on this one)', '2 purple', 'purple'));
  deck.push(card('wacko world', 'everyone (including you) shuffles all their move cards to choose the next move', '2 purple + 1 anything', 'purple'));
  deck.push(card('freaky Friday', 'swap two players\' positions on the board', '3 purple', 'purple'));
  deck.push(card('freaky Friday', 'swap two players\' positions on the board', '3 purple', 'purple'));
  deck.push(card('alchemy', 'turn a dust you drew into anything', '3 purple + 1 anything', 'purple'));
  deck.push(card('alchemy', 'turn a dust you drew into anything', '3 purple + 1 anything', 'purple'));
  deck.push(card('addition by subtractiono', 'discard a dust you drew', '2 purple', 'purple'));
  deck.push(card('addition by subtractiono', 'discard a dust you drew', '2 purple', 'purple'));
  deck.push(card('enhanced magic', 'each of your moves this turn may move double distance', '1 purple + 1', 'purple'));

  return deck;
})();
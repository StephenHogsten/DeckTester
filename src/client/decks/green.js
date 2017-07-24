import card from './card';

export default (function() {
  let deck = [];

  deck.push(card('peek', 'peek at someone else\'s mission', '1 green', 'green'));
  deck.push(card('peek', 'peek at someone else\'s mission', '1 green', 'green'));
  deck.push(card('counter', '(playable in reaction) if something lands on you, you mug them instead', '2 green + 1 anything', 'green'));
  deck.push(card('counter', '(playable in reaction) if something lands on you, you mug them instead', '2 green + 1 anything', 'green'));
  deck.push(card('sneak', '(play when flipping moves) keep your moves hidden and play them all at once', '2 green', 'green'));
  deck.push(card('snatch', 'steal a dust from an opponent to use (return at end of turn)', '1 green + 1 anything', 'green'));
  deck.push(card('snatch', 'steal a dust from an opponent to use (return at end of turn)', '1 green + 1 anything', 'green'));
  deck.push(card('forced exchange', 'trade one of your dusts currently displayed for one of the opponents\' of your choice (and keep it)', '3 green + 1 anything', 'green'));
  deck.push(card('master thief', 'steal anything from any opponent (and keep it)', '4 green', 'green'));
  deck.push(card('shadowy slide', 'if against a wall may move as far in the direction of a card as you wish', '1 green + 1', 'green'));
  deck.push(card('shadowy slide', 'if against a wall may move as far in the direction of a card as you wish', '1 green + 1', 'green'));

  return deck;
})();
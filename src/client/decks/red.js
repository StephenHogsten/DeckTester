import card from './card'

export default (function () {
  let deck = [];

  deck.push(card('fireball', 'choose one player within 5 squares - cancel their next move', '2 red', 'red'));
  deck.push(card('fireball', 'choose one player within 5 squares - cancel their next move', '2 red', 'red'));
  deck.push(card('burn out coal', 'each player picks a dust from their bag and exchanges it for dirt', '4 red', 'red'));
  deck.push(card('burn out coal', 'each player picks a dust from their bag and exchanges it for dirt', '4 red', 'red'));
  deck.push(card('blast off', 'shoot 3 in one direction, mugging everything in your path', '2 red', 'red'));
  deck.push(card('blast off', 'shoot 3 in one direction, mugging everything in your path', '2 red', 'red'));
  deck.push(card('hot spot', 'place a marker on the board, if anyone lands there this turn their turn ends', '2 red + 1', 'red'));
  deck.push(card('embers', 'any more red spells this turn cost 1 red less', '1 red', 'red'));
  deck.push(card('hot sun', 'all water moves cost 1 extra water', '2 red + 1', 'red'));
  deck.push(card('red hot', '(playable in reaction) if something lands on you it has to jump off (too hot)', '2 red', 'red'));
  deck.push(card('red hot', '(playable in reaction) if something lands on you it has to jump off (too hot)', '2 red', 'red'));
  
  return deck;
})();
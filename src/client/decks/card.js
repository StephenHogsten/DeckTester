export default function card(name, effect, cost, deck='') {
  return {
    cost: cost,
    effect: effect,
    name: name,
    deck: deck
  }
}
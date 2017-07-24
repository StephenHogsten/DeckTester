import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../scss/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      purple: [
        ['teleport - roll the dice (first) then teleport yourself or one of the wizards to that spot', '1 purple + 1 anything'], 
        ['add an extra move card and redraw your dust (including what you spent on this one)', '2 purple'], 
        ['wacko world - everyone (including you) shuffles all their move cards to choose the next move', '2 purple + 1 anything'], 
        ['freaky Friday - swap two players\' positions on the board', '3 purple'], 
        ['turn a dust you drew into anything', '3 purple + 1 anything'], 
        ['discard a dust you drew', '2 purple'],
        ['teleport - roll the dice (first) then teleport yourself or one of the wizards to that spot', '1 purple + 1 anything'], 
        ['add an extra move card and redraw your dust (including what you spent on this one)', '2 purple'], 
        ['wacko world - everyone (including you) shuffles all their move cards to choose the next move', '2 purple + 1 anything'], 
        ['freaky Friday - swap two players\' positions on the board', '3 purple'], 
        ['turn a dust you drew into anything', '3 purple + 1 anything'], 
        ['discard a dust you drew', '2 purple'],
        ['teleport - roll the dice (first) then teleport yourself or one of the wizards to that spot', '1 purple + 1 anything'], 
        ['add an extra move card and redraw your dust (including what you spent on this one)', '2 purple'], 
        ['wacko world - everyone (including you) shuffles all their move cards to choose the next move', '2 purple + 1 anything'], 
        ['freaky Friday - swap two players\' positions on the board', '3 purple'], 
        ['turn a dust you drew into anything', '3 purple + 1 anything'], 
        ['discard a dust you drew', '2 purple'],
        ['enhanced magic: each of your moves this turn may move double distance', '1 purple + 1'],
        ['enhanced magic: each of your moves this turn may move double distance', '1 purple + 1'],
        ['enhanced magic: each of your moves this turn may move double distance', '1 purple + 1']
      ],
      red: [
        ['embers - any more red spells this turn cost 1 red less', '1 red'], 
        ['hot sun - all water moves cost 1 extra water', '2 red + 1 anything'], 
        ['fireball - choose one player within 5 squares - cancel their next move', '2 red'], 
        ['red hot - (playable in reaction) if something lands on you it has to jump off (too hot)', '2 red'], 
        ['burn out coal - each player picks a dust from their bag and exchanges it for dirt', '4 red'], 
        ['hot spot - place a marker on the board, if anyone lands there this turn their turn ends', '2 red + 1 anything'],
        ['embers - any more red spells this turn cost 1 red less', '1 red'], 
        ['hot sun - all water moves cost 1 extra water', '2 red + 1 anything'], 
        ['fireball - choose one player within 5 squares - cancel their next move', '2 red'], 
        ['red hot - (playable in reaction) if something lands on you it has to jump off (too hot)', '2 red'], 
        ['burn out coal - each player picks a dust from their bag and exchanges it for dirt', '4 red'], 
        ['hot spot - place a marker on the board, if anyone lands there this turn their turn ends', '2 red + 1 anything'],
        ['embers - any more red spells this turn cost 1 red less', '1 red'], 
        ['hot sun - all water moves cost 1 extra water', '2 red + 1 anything'], 
        ['fireball - choose one player within 5 squares - cancel their next move', '2 red'], 
        ['red hot - (playable in reaction) if something lands on you it has to jump off (too hot)', '2 red'], 
        ['burn out coal - each player picks a dust from their bag and exchanges it for dirt', '4 red'], 
        ['hot spot - place a marker on the board, if anyone lands there this turn their turn ends', '2 red + 1 anything'],
        ['blast off - shoot 3 in one direction, mugging everything in your path', '2 red'],
        ['blast off - shoot 3 in one direction, mugging everything in your path', '2 red'],
        ['blast off - shoot 3 in one direction, mugging everything in your path', '2 red']
      ],
      blue: [ 
        ['wave - push one player 2 spaces away', '1 blue'], 
        ['tidal wave - push one player as far as you want', '3 blue + 1 anything'], 
        ['whirlpool - anyone within 5 spaces rotates the rest of their moves clockwise', '2 blue'], 
        ['flood - any further moves that move more than one space are reduced by one', '2 blue'], 
        ['rain - any other blue spells this turn cost 2 blue less (minimum 1)', '1 blue'], 
        ['ice - continue in current direction until you hit something', '2 blue + 1 anything'],
        ['wave - push one player 2 spaces away', '1 blue'], 
        ['tidal wave - push one player as far as you want', '3 blue + 1 anything'], 
        ['whirlpool - anyone within 5 spaces rotates the rest of their moves clockwise', '2 blue'], 
        ['flood - any further moves that move more than one space are reduced by one', '2 blue'], 
        ['rain - any other blue spells this turn cost 2 blue less (minimum 1)', '1 blue'], 
        ['ice - continue in current direction until you hit something', '2 blue + 1 anything'],
        ['wave - push one player 2 spaces away', '1 blue'], 
        ['tidal wave - push one player as far as you want', '3 blue + 1 anything'], 
        ['whirlpool - anyone within 5 spaces rotates the rest of their moves clockwise', '2 blue'], 
        ['flood - any further moves that move more than one space are reduced by one', '2 blue'], 
        ['rain - any other blue spells this turn cost 2 blue less (minimum 1)', '1 blue'], 
        ['ice - continue in current direction until you hit something', '2 blue + 1 anything'],
        ['lily pad - hop two extra in any direction', '2 blue + 1'],
        ['lily pad - hop two extra in any direction', '2 blue + 1'],
        ['lily pad - hop two extra in any direction', '2 blue + 1']
      ],
      green: [
        ['peek at someone else\'s mission', '1 green'], 
        ['counter - (playable in reaction) if something lands on you, you mug them instead', '2 green + 1 anything'], 
        ['sneak - (play when flipping moves) keep your moves hidden and play them all at once', '2 green'], 
        ['snatch - steal a dust from an opponent to use (return at end of turn)', '1 green + 1 anything'], 
        ['forced exchange - trade one of your dusts for one of the opponents\' of your choice (and keep it)', '3 green + 1 anything'], 
        ['master thief - steal from any opponent (and keep it)', '4 green'], 
        ['peek at someone else\'s mission', '1 green'], 
        ['counter - (playable in reaction) if something lands on you, you mug them instead', '2 green + 1 anything'], 
        ['sneak - (play when flipping moves) keep your moves hidden and play them all at once', '2 green'], 
        ['snatch - steal a dust from an opponent to use (return at end of turn)', '1 green + 1 anything'], 
        ['forced exchange - trade one of your dusts for one of the opponents\' of your choice (and keep it)', '3 green + 1 anything'], 
        ['master thief - steal from any opponent (and keep it)', '4 green'], 
        ['peek at someone else\'s mission', '1 green'], 
        ['counter - (playable in reaction) if something lands on you, you mug them instead', '2 green + 1 anything'], 
        ['sneak - (play when flipping moves) keep your moves hidden and play them all at once', '2 green'], 
        ['snatch - steal a dust from an opponent to use (return at end of turn)', '1 green + 1 anything'], 
        ['forced exchange - trade one of your dusts for one of the opponents\' of your choice (and keep it)', '3 green + 1 anything'], 
        ['master thief - steal from any opponent (and keep it)', '4 green'],
        ['shadowy slide - if against a wall may move as far in the direction of a card as you wish', '1 green + 1'],
        ['shadowy slide - if against a wall may move as far in the direction of a card as you wish', '1 green + 1'],
        ['shadowy slide - if against a wall may move as far in the direction of a card as you wish', '1 green + 1']
      ],
      altar: [  // each of these is 25 VP, does not accept wildcards
        'deposit 2 of each dust',
        'deposit 4 green dusts',
        'deposit 4 red dusts',
        'deposit 4 blue dusts',
        'deposit 4 purple dusts',
        'deposit 3 purple and 2 red',
        'deposit 3 purple and 2 blue',
        'deposit 3 green 1 blue and 1 purple',
        'deposit 3 green 1 red and 1 purple',
        'deposit 2 red, 2 purple, two green',
        'deposit 2 blue, 2 purple, two green',
        'deposit two wildcard dusts',
        'deposit 1 of each dust and the cube'
      ],
      mission: [
        'rob red wizard - 5 vp',
        'rob blue wizard - 5 vp',
        'rob purple wizard - 5 vp',
        'rob green wizard - 5 vp',
        'rob player to your left - 8vp',
        'rob player to your right - 8vp',
        'acquire a "wild card" dust - 5vp',
        'acquire one of each dust - 5vp',
        'acquire 3 red dusts - 12vp',
        'acquire 3 blue dusts - 12vp',
        'acquire 3 purple dusts - 12vp',
        'acquire 3 green dusts - 12vp',
        'rob red wizard - 5 vp',
        'rob blue wizard - 5 vp',
        'rob purple wizard - 5 vp',
        'rob green wizard - 5 vp',
        'rob player to your left - 8vp',
        'rob player to your right - 8vp',
        'acquire a "wild card" dust - 5vp',
        'acquire one of each dust - 5vp',
        'acquire 3 red dusts - 12vp',
        'acquire 3 blue dusts - 12vp',
        'acquire 3 purple dusts - 12vp',
        'acquire 3 green dusts - 12vp',
        'deposit one green dust in green land - 10vp',
        'deposit one blue dust in blue land - 10vp',
        'deposit one red dust in red land - 10vp',
        'deposit one purple dust in purple land - 10vp',
        'deposit one green dust in green land - 10vp',
        'deposit one blue dust in blue land - 10vp',
        'deposit one red dust in red land - 10vp',
        'deposit one purple dust in purple land - 10vp',
        'go to building A - 2vp',
        'go to building B - 3vp',
        'go to building C - 3vp',
        'go to building D - 3vp',
        'go to building E - 3vp',
        'go to building F - 2vp',
        'go to building G - 3vp',
        'go to building H - 3vp',
        'go to building I - 3vp',
        'go to building J - 3vp',
        'go to building K - 2vp',
        'go to building L - 3vp',
        'go to building M - 3vp',
        'go to building N - 3vp',
        'go to building O - 3vp',
        'go to building P - 2vp',
        'go to building Q - 3vp',
        'go to building R - 3vp',
        'go to building S - 3vp',
        'go to building T - 3vp',
        'deliver hamster to building B - 10vp',
        'deliver hamster to building E - 10vp',
        'deliver hamster to building G - 10vp',
        'deliver hamster to building J - 10vp',
        'deliver hamster to building L - 10vp',
        'deliver hamster to building O - 10vp',
        'deliver hamster to building Q - 10vp',
        'deliver hamster to building T - 10vp'
      ],
      altars: [],
      purpleCards: [],
      redCards: [],
      blueCards: [],
      greenCards: [],
      missions: [],
      showMissions: true
    };
  }

  componentDidMount() {
    this.setAltars();
    this.chooseBlue();
    this.chooseGreen();
    this.choosePurple();
    this.chooseRed();
    this.chooseMissions();
  }

  setAltars() {
    let a = [];
    for (let i=0; i<4; i++) {
      let x;
      do {
        x = Math.floor(12 * Math.random());
      }
      while (x in a);
      a.push(x)
    }
    this.setState({altars: a});
  }
  choosePurple() {
    this.setState({
      purpleCards: [
        Math.floor(18 * Math.random()),
        Math.floor(18 * Math.random())
      ]
    });
  }
  chooseRed() {
    this.setState({
      redCards: [
        Math.floor(18 * Math.random()),
        Math.floor(18 * Math.random())
      ]
    });
  }
  chooseBlue() {
    this.setState({
      blueCards: [
        Math.floor(18 * Math.random()),
        Math.floor(18 * Math.random())
      ]
    });
  }
  chooseGreen() {
    this.setState({
      greenCards: [
        Math.floor(18 * Math.random()),
        Math.floor(18 * Math.random())
      ]
    });
  }
  chooseMissions() {
    let m = this.state.mission.length
    this.setState({
      missions: [
        Math.floor(m * Math.random()),
        Math.floor(m * Math.random()),
        Math.floor(m * Math.random())
      ],
      showMissions: false
    });

  }
  flipMission() {
    this.setState({
      showMissions: !this.state.showMissions
    });
  }

  render() {
    const table = (
      <table className='table table-bordered'>
        <tbody>
          <tr>
            <td className='green'>(0,0) P: draw green spell</td>
            <td>Q: 2 non dirts for a wild</td>
            <td>R: more missions</td>
            <td>S: altar (+25)</td>
            <td>T: +1 VP</td>
            <td className='purple'>A: draw purple</td>
          </tr>
          <tr>
            <td>O: +1 VP</td>
            <td></td>
            <td></td>
            <td>{this.state.altar[this.state.altars[0]]}</td>
            <td></td>
            <td>B: -2 VP + any gem</td>
          </tr>
          <tr>
            <td>N: altar</td>
            <td>{this.state.altar[this.state.altars[1]]}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>C: more missions</td>
          </tr>
          <tr>
            <td>M: pick who goes first</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{this.state.altar[this.state.altars[1]]}</td>
            <td>D: altar (+25)</td>
          </tr>
          <tr>
            <td>L: trade a non dirt</td>
            <td></td>
            <td>{this.state.altar[this.state.altars[1]]}</td>
            <td></td>
            <td></td>
            <td>E: +1 VP</td>
          </tr>
          <tr>
            <td className='red'>K: pick red spell</td>
            <td>J: +1 VP</td>
            <td>I: altar (+25)</td>
            <td>H: more missions</td>
            <td>G: -1 VP -1 cube (and hamster)</td>
            <td className='blue'>F: draw blue spell</td>
          </tr>
        </tbody>
      </table>
    );

    return (
      <div className='container'>
        {table}
        <div className='info-row'>
          <div className="card-holder green" onClick={() => this.chooseGreen()}>
            <p>{this.state.green[this.state.greenCards[0]]}</p>
            <p>{this.state.green[this.state.greenCards[1]]}</p>
          </div>
          <div className="card-holder purple" onClick={() => this.choosePurple()}>
            <p>{this.state.purple[this.state.purpleCards[0]]}</p>
            <p>{this.state.purple[this.state.purpleCards[1]]}</p>
          </div>
          <div className="card-holder red" onClick={() => this.chooseRed()}>
            <p>{this.state.red[this.state.redCards[0]]}</p>
            <p>{this.state.red[this.state.redCards[1]]}</p>
          </div>
          <div className="card-holder blue" onClick={() => this.chooseBlue()}>
            <p>{this.state.blue[this.state.blueCards[0]]}</p>
            <p>{this.state.blue[this.state.blueCards[1]]}</p>
          </div>
        </div>
        <div className='info-row'>
          <div className='notes'>
            <p>A / 3: spend two anythings to cancel</p>
            <p>2 / 4: spend 3 anythings to go one extra</p>
          </div>
          <div className='btn btn-primary' onClick={() => this.flipMission()}>
            {this.state.showMissions? 'Hide Mission': 'Show Missions'}
          </div>
          { (this.state.showMissions)? (
            <div className='missions'>
              <p>{this.state.mission[this.state.missions[0]]}</p>
              <p>{this.state.mission[this.state.missions[1]]}</p>
              <p>{this.state.mission[this.state.missions[2]]}</p>
              <div className='btn btn-primary' onClick={() => this.chooseMissions()}>
                new missions
              </div>
            </div>
          ) : '' }
        </div>
      </div>
    );
  }
}

export default App;
# Dustup [![Build Status](https://travis-ci.org/dustup/dustup.svg?branch=master)](https://travis-ci.org/dustup/dustup)

Reference fighting game moves from your phone!

## Development

Dustup is powered by [React Native](https://facebook.github.io/react-native/).
To get a development environment running you'll need `npm`.

This project requires `node ^10.6.0` and  `npm ^6.1.0`.

```
git clone https://github.com/dustup/dustup
cd dustup
npm install
```

Optionally you'll need to open your firewall if you desire to use [Expo](https://expo.io/) to live demo Dustup on a mobile device during development.

```
sudo firewall-cmd --add-port 19000-19001/tcp
sudo firewall-cmd --add-port 19000-19001/tcp --permanent
```

Then crank it up:

```
npm run exp
```

## Tests

Run Dustup tests via `npm test`.

This runs `jest` as well as validating our move data against a schema (using `ajv` and `ajv-cli`).

## Concepts

Since fighting games vary so widely, we had to simplify a few concepts here and there for the sake of data storage with respect to the movelists.
Otherwise we'd be essentially programming a new app for every game, which doesn't seem particularly efficient in getting movesets in front of mobile users.
You can find our definitions and simplifications below.
Exceptions to these guidelines *may* occur, but only if very specifically layed out for a given game.
These are fighting games after all.
Exceptions and gimmicks rule. :smiley:

### Normal Move

A Normal Move is categorized as containing a single directional input of one of the following: **a)** a neutral joystick position (`5`), **b)** a downward joystick position with no lateral motion (`2`), **c)** or a neutral joystick position while in mid-air (`j.`) followed by single action-button press.

```
5A
2C
j.[B]
j.2D
```

### Command Normal Move

A Command Normal is categorized as containing a single directional input other than those for a [Normal Move](#normal-move) followed by a single action-button press.

```
3B
6[C]
j.9D
```

### Special Move

A Special Move is categorized as containing more than one directional input (usually 2-5 directions) followed by a single action-button press.
Special Moves that consume meter are generally referred to as EX Special Moves.

```
22B
236A
623B
41236[D]
```

### Super Move

A Super Move is more-or-less a [Special Move](#special-move) but with more directional inputs (5+).
Super Moves almost always consume meter.

```
41236B
236236A
```

### Ultra Move

An Ultra Move is typically a finisher.
It's very flashy, usually with some kind of cinematic.
It more often-than-not requires full meter and consumes all of it.
Sometimes it may require your health to be below a certain threshold to trigger.
Inputs for Ultra Moves are essentially anything goes.

```
632146D
4123646H
A+B+C+D
```

## Universal Mechanics

Universal Mechanics are moves that all characters in a fighting game share.
These moves almost always have the same input for every character in the same game, but their characteristics and animations may differ anywhere from slightly to entirely.
For instance, throws and bursts are Universal Mechanics.

### Follow Up

A Follow Up is a move that can only be triggered when its inputs are entered after another move has just finished.
Follow Ups can be [Normals](#normal-move), [Command Normals](#command-normal-move), [Specials](#special-move), [Supers](#super-move), or even an [Ultra Move](#ultra-move).

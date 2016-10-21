'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('Initializing playerService');

  let service = {};
  let turn = 0;
  let walks = ['saunters', 'wriggles', 'skulks', 'skips', 'slithers', 'leaps', 'floats', 'oozes', 'wobbles', 'spins', 'humps', 'worms', 'disco-dances', 'flops', 'flips', 'flaps'];
  let aliens = ['Waffledorian', 'Ubyronian', 'Malflorbite', 'Ultrasyb', 'Cikmurd', 'Zraukmahie', 'Slyque', 'Gnypsie', 'Rakmort'];
  let speciesOne = ['Peter', 'Apple', 'Trumpet', 'Florb', 'Bubble', 'Brisket', 'Digi', 'Ugly', 'Beauty', 'Eroto', 'Horror', 'Stink', 'Smug', 'Widget', 'Drill', 'Scum', 'Ultra', 'Mega', 'Fungal'];
  let speciesTwo = ['beast', 'blob', 'kin', 'fish', 'creature', 'thing', 'construct', 'wrack', 'boil', 'thug', 'crat', 'baby', 'crone', 'urge', 'scope'];

  service.randomizeArray = function(array) {
    return array[Math.floor(Math.random()*array.length)];
  };

  let player = service.player = {
    name: 'Bodega',
    location: 'bodegaCell',
    heat: 0,
  };

  let history = service.history = [
    'You are BODEGA, Galactic Freebooteneer, Smugglehacker, Solarball Hall-of-Famer and occassional killer for hire. Bodega is the man that every man wants to be and that every Ubyronian longs to bargleflak.',
    'Times are hard for Bodega. Unjustly convicted of a murder he wasn\'t even paid for, he\'s been sentenced to house arrest -- and the house is SPACEJAIL! Now he\'s a financial asset on the books of PrisonTech Industries, like any common underthug from Galaxon III.',
    'Guide Bodega through an adventure of blood, tears and unlikely romance, and ESCAPE back to freedom among the stars.',
    'Bodega needs to gain the trust of his fellow Prisonthings. For now, try to blend in to gain their trust'];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;
      let currentLoc = player.location;
      let newLoc = mapService.mapData[currentLoc][direction];
      if(!newLoc) {
        history.unshift(`Turn ${turn}: ${player.name} thrust-bangs his skullbone against the prison wall, which is constructed from pure Padamantium(tm). It does not yield.`);
        return reject('Can\'t go that way');
      }
      history.unshift(`Turn ${turn}: ${player.name} ${service.randomizeArray(walks)} into the ${mapService.mapData[newLoc].name} like a ${service.randomizeArray(aliens)} ${service.randomizeArray(speciesOne)}${service.randomizeArray(speciesTwo)}`);
      player.location = newLoc;
      return resolve(player.location);
    });
  };

  return service;
}

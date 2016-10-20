'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('Initializing playerService');

  let service = {};
  let turn = 0;

  let player = service.player = {
    name: 'Bodega',
    location: 'bodegaCell',
    heat: 0,
  };

  let history = service.history = [];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;
      let currentLoc = player.location;
      let newLoc = mapService.mapData[currentLoc][direction];
      if(!newLoc) {
        history.unshift(`Turn ${turn}: ${player.name} thrust-bangs his skullbone against the Padamantium(tm) prison wall. It's as unyielding as a Megathropium Shieldbeast.`);
        return reject('A Padamantium(tm) wall blocks that direction');
      }
      history.unshift(`Turn ${turn}: ${player.name} saunters into the ${mapService.mapData[newLoc].name}`);
      player.location = newLoc;
      return resolve(player.location);
    });
  };

  return service;
}

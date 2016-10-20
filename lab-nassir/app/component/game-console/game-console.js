'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gameControl', {
  template: require('./game-console.html'),
  controller: 'GameConsoleController',
  controllerAs: 'gameConsoleCtrl',
});

ngAdventure.controller('GameConsoleController', ['$log', 'playerService', GameConsoleController]);

function GameConsoleController($log, playerService) {
  $log.debug('Initializing GameConsoleController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then(loc => {
      $log.debug(`Player at location ${loc}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}

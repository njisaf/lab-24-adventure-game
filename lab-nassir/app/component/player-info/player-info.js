'use strict';

require('./_player-info.scss');

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl',
});

ngAdventure.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  $log.debug('Initializing PlayerInfoController');
  this.player = playerService.player;
}

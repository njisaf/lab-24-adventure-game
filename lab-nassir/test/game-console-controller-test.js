'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Testing GameConsoleController', function() {
  let $componentController;
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject(_$componentController_ => {
      $componentController = _$componentController_;
    });
  });

  describe('Testing defined props', () => {
    it('Should return an array with four indexes', () => {
      var bindings = {};
      var gameConsoleCtrl = $componentController('gameConsole', null, bindings);
      expect(gameConsoleCtrl.directions.length).toEqual(4);
      expect(gameConsoleCtrl.directions[0]).toEqual('north');
    });
  });

  describe('Testing that location is returned', () => {
    it('Should return a new location?', () => {
      var bindings = {moveDirection: 'south'};
      var gameConsoleCtrl = $componentController('gameConsole', null, bindings);
      gameConsoleCtrl.movePlayer();
      expect(this.locationTester).toBe('commonArea');
    });
  });

});

'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Testing GameHistoryController', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject($controller => {
      this.gameHistoryCtrl = new $controller('GameHistoryController');
    });
  });

  describe('Testing that history is returned', () => {
    it('Should return a history?', () => {
      let playerService = {history: 'Hello'};
      expect(this.gameHistoryCtrl.history).toBe(playerService.history);
    });
  });

  describe('Can I get anything to work??', () => {
    it('True is true', () => {
      expect(true).toEqual(true);
    });
  });

});

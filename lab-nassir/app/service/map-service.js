'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('Initializing mapService');

  let service = {};

  service.mapData = {
    bodegaCell: {
      name: 'Bodega\'s RestrainoRoom(tm) by PrisonTech Industries',
      desc: 'bodegaCell',
      north: null,
      south: 'commonArea',
      east: null,
      west: null,
    },
    grunkCell: {
      name: 'Grunk\'s RestrainoRoom(tm) by PrisonTech Industries',
      desc: 'grunkCell',
      north: 'commonArea',
      south: null,
      east: null,
      west: null,
    },
    mxlytyCell: {
      name: 'Mxlyty\'s RestrainoRoom(tm) by PrisonTech Industries',
      desc: 'mxlytyCell',
      north: null,
      south: null,
      east: 'commonArea',
      west: null,
    },
    commonArea: {
      name: 'PrisonTech Industries Omniwatched Relaxodrome(tm)',
      desc: 'commonArea',
      north: 'bodegaCell',
      south: 'grunkCell',
      east: 'cafeteria',
      west: 'mxlytyCell',
    },
    cafeteria: {
      name: 'PrisonTech Industries Universal Grubporium(tm)',
      desc: 'cafeteria',
      north: null,
      south: 'kitchen',
      east: null,
      west: 'commonArea',
    },
    kitchen: {
      name: 'PrisonTech Industries Refeedotron(tm)',
      desc: 'kitchen',
      north: 'cafeteria',
      south: null,
      east: null,
      west: null,
    },
    solitary: {
      name: 'PrisonTech Industries Sanitary Beatspace(tm), featuring Solitary InsanityPod 2.0(tm)',
      desc: 'solitary',
      north: null,
      south: null,
      east: null,
      west: null,
    },
  };


}

'use strict';

/**
 * @ngdoc function
 * @name ngColorPaletteApp.controller:PalettectrlCtrl
 * @description
 * # PalettectrlCtrl
 * Controller of the ngColorPaletteApp
 */
angular.module('ngColorPaletteApp')
  .controller('PaletteCtrl', function () {
    this.items = [
      {
        color: 'red',
        selected: true
      },
      {
        color: 'green'
      },
      {
        color: 'blue'
      },
    ];
  });

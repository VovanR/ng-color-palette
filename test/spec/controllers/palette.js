'use strict';

describe('Controller: PalettectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ngColorPaletteApp'));

  var PalettectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PalettectrlCtrl = $controller('PalettectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PalettectrlCtrl.awesomeThings.length).toBe(3);
  });
});

module.exports = function (ngModule) {
	ngModule
		.directive('palette', function () {
			return {
				restrict: 'E',
				scope: {},
				templateUrl: 'directives/palette/palette.html',
				controllerAs: 'paletteCtrl',
				controller: function () {
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
				}
			};
		});
};

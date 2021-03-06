var app = angular.module('cle', [
        'ui.router',
        'ngTouch'
    ]);

app.run(['$rootScope',
    '$state',
    '$location',
    '$window',
    function ($rootScope, $state, $location, $window) {
        $rootScope.$state = $state;

        // Check if page requires login
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                // Add functionality before state/page changes here
            }
        );

        // Get Page Title on successful page change
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            // Sets HTML/Page Title
            $rootScope.currentPage = toState.name;

            if (toState.data && toState.data.pageTitle) {
                $rootScope.pageTitle = toState.data.pageTitle;
            } else {
                $rootScope.pageTitle = 'Default Title';
            }

            // Add functionality for successful state/page change here
        });

        // Scroll to top of page on page change
        $rootScope.$on('$viewContentLoaded', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }
]);

app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                data: {
                    pageTitle: 'Innovative Design'
                }
            })
            .state('deena', {
                url: '/deena',
                templateUrl: './views/deena.html',
                data: {
                    pageTitle: 'Deena'
                }
            })
            .state('brendon', {
                url: '/brendon',
                templateUrl: './views/brendon.html',
                data: {
                    pageTitle: 'Brendon'
                }
            })
            .state('henry', {
                url: '/henry',
                templateUrl: './views/henry.html',
                data: {
                    pageTitle: 'Henry'
                }
            })
            .state('jerry', {
                url: '/jerry',
                templateUrl: './views/jerry.html',
                data: {
                    pageTitle: 'Jerry'
                }
            })
            .state('joyce', {
                url: '/joyce',
                templateUrl: './views/joyce.html',
                data: {
                    pageTitle: 'Joyce'
                }
            })
            .state('krista', {
                url: '/krista',
                templateUrl: './views/krista.html',
                data: {
                    pageTitle: 'Krista'
                }
            })
            .state('sonia', {
                url: '/sonia',
                templateUrl: './views/sonia.html',
                data: {
                    pageTitle: 'Sonia'
                }
            });
    }
]);

app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.test = "successful home controller";
}]);

app.controller('NavCtrl', ['$scope', '$state', '$location', function($scope, $state, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);

app.controller('BrendonCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.about = "I'm Brendon, a third year Econ major and my hobbies include binge watching Netflix and the occasional Illustrator and Photoshop.";
}]);

app.controller('DeenaCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.about = "My name is Deena and I am a first year here at Cal. I am a Political Science major, but graphic design and art has always been a big part of my life.";
}]);

app.controller('HenryCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.about = "I’m Henry, a first year computer science major. I enjoy all sorts of things, including art, music (especially a capella), and wasting time on the internet.";
}]);

app.controller('JerryCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.about = "Jerry is a freshman with an undecided major. He has no idea which direction life is taking him, but he hopes it involves superheros, sundance films, and pesto.";
}]);

app.controller('JoyceCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.about = "I'm Joyce and I'm an intended Cognitive Science major! Besides graphic design, I also really love chocolate covered raisins and scottish fold cats.";
}]);

app.controller('KristaCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.about = "I'm Krista, a third year English and Media Studies major at Cal! I love graphic design, photography, and also dyeing my hair *~magical colors~* so people think I'm a mermaid.";
}]);

app.controller('SoniaCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.about = "I'm Sonia and I'm a second year Art History/Political Economics double major. My favourite pastime is eating pasta from Pasta Bene while rewatching Star Trek 2...because Benedict Cumberbatch.";
}]);





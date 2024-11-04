//app = angular.module('myApp1',[  ]);
app.controller('namesCtrl',function($scope){
    
    $scope.names = [
        {name:'Jani', country: 'Norway'},
        {name: 'Hege', country: 'Sweden'},
        {name: 'Kai', country: 'Denmark'},
        {name: 'Joe', country: 'Denmark'},
        {name: 'Birgit', country: 'Denmark'},
        {name: 'Margareth', country: 'England'},
        {name: 'Mary', country: 'Engalnd'},
        {name: 'Carl', country: 'Sweden'},
        {name: 'Gustav', country: 'Sweden'}
    ];
    $scope.names1 = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
    $scope.orderByMe = function(x){
        $scope.myOrderBy = x;
    };
});
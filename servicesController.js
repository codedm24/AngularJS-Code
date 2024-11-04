app.controller('servicesCtrl',function($scope, $sce, $location, $http, $timeout, $interval, hexafy){
    $scope.myUrl = $location.absUrl();
    //from webappWebAPI solution
    //alert('here');
    //service url - 'http://localhost:5271/WeatherForecast/GetTotalCount'
    $http.get('http://localhost:5271/api/ServiceTest/GetTotalCount')
    .then(function(response){
        //alert(response);
        //alert(response.data);
        $scope.myWelcome = JSON.stringify(response.data);
    })
    .catch(function(error){
        alert('error fetching data: ' + JSON.stringify(error));
    });
    $scope.myHeader="Hello World!";
    $timeout(function(){
        $scope.myHeader = "How are you today?";
    }, 2000);
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
    $scope.hex = hexafy.myFunc(235);
    $scope.counts = [255, 251, 200];
    $scope.GetData = function(){
        //alert('here');
        $http({
            method:"GET",
            url:"http://localhost:5271/WeatherForecast/GetTotalCount"
        }).then(function mySuccess(response){
            //alert('success' + response.data);
            $scope.serviceData = "Headers: " + JSON.stringify(response.headers) + 
            ", Config:" + JSON.stringify(response.config) +
            ", Data: " + JSON.stringify(response.data) + 
            ", Status: " + JSON.stringify(response.status) +
            ", StatusText: " + JSON.stringify(response.statusText);
        },function myError(response){
            //alert('error:' + response.data);
            $scope.serviceData = JSON.stringify(response.statusText);
        });
    };
    $scope.GetRecords = function(){
        $http({
            method: "GET",
            url: "http://localhost:5271/api/ServiceTest/GetRecords"
        }).then(function mySuccess(response){
            jsonObject =JSON.parse(response.data);
            recordarr = jsonObject.records;
            $scope.customerrecords = recordarr;
            //alert($scope.customerrecords);
        },function myError(response){
            alert('error: ' + response.data);
        });
    };
    $scope.formatrecord = function(x){
        // var text = JSON.stringify(x);
        // var prettyHtml = jsonPrettyHtml;
        // var returnval = prettyHtml(text,x.dimension);        
        //returnval = "Name: " + x.Name + ", City: " + x.City + ", Country: " + x.Country;
        //returnval = JSON.stringify(x,null,2);
        //prettyJsonString = prettyPrintJson.toHtml(x);
        //returnVal = $sce.trustAsHtml(prettyJsonString);
        returnval = '<pre>'+ prettyPrintJson.toHtml(x) +'</pre>';
        return returnval;
    };
});

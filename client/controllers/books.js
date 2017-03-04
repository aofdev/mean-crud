var myApp = angular.module('myApp');

myApp.controller('BooksController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('BooksController loaded...');

        $scope.getBooks = function() {
            $http.get('/api/books').success(function(response) {
                $scope.books = response;
            });
        };

        $scope.getBook = function() {
            var id = $routeParams.id;   //get id มา
            $http.get('/api/books/'+id).success(function(response) {
                $scope.book = response;
            });
        };
        $scope.addBook = function() {
            console.log($scope.book);
            $http.post('/api/books/', $scope.book).success(function(response) {
                window.location.href='#/books';
                $.smkAlert({ text: "success insert", type:'success', position:'bottom-right'});
            });
        };
        $scope.updateBook = function() {
            var id = $routeParams.id;
            $http.put('/api/books/'+id, $scope.book).success(function(response) {
                window.location.href='#/books';
                $.smkAlert({ text: "success update", type:'warning', position:'bottom-right'});
            });
        };
        $scope.removeBook = function(id) {
            $http.delete('/api/books/'+id).success(function(response) {
                window.location.href='#/books';
                $('#myModal').modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
        };
}]);
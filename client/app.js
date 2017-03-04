var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/',{
        controller:'BooksController',
        templateUrl:'views/books.html'
    })
        .when('/books',{
            controller:'BooksController',
            templateUrl:'views/books.html'
        })
        .when('/books/detail/:id',{
            controller:'BooksController',
            templateUrl:'views/book_detail.html'
        })
        .when('/books/add',{
            controller:'BooksController',
            templateUrl:'views/add_book.html'
        })
        .when('/books/edit/:id',{
            controller:'BooksController',
            templateUrl:'views/edit_book.html'
        })
        .when('/books/about',{
            controller:'BooksController',
            templateUrl:'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});
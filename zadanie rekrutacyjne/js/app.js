var app = angular.module('myApp', [])
    .controller('Add_commentCtrl', Add_commentCtrl);


function Add_commentCtrl($scope, $http) {


    $http.get("data.json").success(function (data) {
        $scope.comments = data;
    });

    $scope.getTotalComments = function () {
        return $scope.comments.length;
    };


    $scope.addComments = function () {

        $scope.comments.push({
            text: $scope.formCommentsText
        });
        $scope.formCommentsText = '';
    };

};

(function ($) {
    $(window).on("load", function () {
        $(".comment").mCustomScrollbar();
    }); // scroll on comments

    $location_adress = location.href;
    $(".modal-content").append($location_adress); // show http adress

    $("#hide_comment").click(function () {
        $(".comment").fadeToggle("slow");
    }); // show/hide comment




})(jQuery);

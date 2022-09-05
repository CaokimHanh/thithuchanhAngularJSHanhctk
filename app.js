// Code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	console.log("My controller.....");
		
		
		$scope.users = [
			{product: "Product One", price: "$22.50"},
			{product: "Product Two", price: "$15.00"},
			{product: "Product Four", price: "$123.82"},
			{product: "Product Five", price: "$123.75"},
		];

	$scope.addProduct = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New Product successfully";
	};
	
	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.editProduct = function(){
		$scope.message = "Product Edited successfully";
	};

	$scope.deleteProduct = function(){
		let i = $scope.users.indexOf($scope.clickedUser)
		$scope.users = $scope.users.filter((item,index)=>{
			return index != i
		})
		$scope.message = "Product Deleted successfully";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};

});
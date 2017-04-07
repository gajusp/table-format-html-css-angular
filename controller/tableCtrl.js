var app = angular.module('zensarTaskApp', []);
app.controller('TableCtrl', function ($scope) {
    console.log("======= TableCtrl ========");
    $scope.formObj = {otherformat: "", price: "", newfrom: "", usedfrom: ""};
    $scope.updateFormBtn = "Add New Row";
    $scope.selectedIndex = -1;
    $scope.tableDataArr = [
        {otherformat: "Hardcover", price: "R 300", newfrom: "R 334.99", usedfrom: "R 269.99"},
        {otherformat: "Paperback", price: "R 150.00", newfrom: "R 169.99", usedfrom: "R 119.99"},
        {otherformat: "Audio, CD, Audiobook, Unabridge", price: "R 180.00", newfrom: "R 89.99", usedfrom: "R 60.99"},
        {otherformat: "Unknown Binding", price: "R 50.00", newfrom: "R 50.00", usedfrom: "R 50.00"}
    ];

    /**
     * selected item in row
     */
    $scope.onUpdateData = function (item, indx) {
        $scope.formObj = angular.copy(item);
        $scope.selectedIndex = indx;
        $scope.updateFormBtn = "Update Details";
    };

    /**
     * Update the selected data
     */
    $scope.onDeleteData = function (indx) {
        $scope.tableDataArr.length > 0 && $scope.tableDataArr.splice(indx, 1);
    };

    /**
     * Update details
     */
    $scope.onAddUpdateDetails = function (updateForm) {
        if (updateForm.$valid) {
            //add row
            if ($scope.selectedIndex === -1) {
                $scope.tableDataArr.push($scope.formObj);
            } else {
                //update row
                $scope.tableDataArr[$scope.selectedIndex] = $scope.formObj;
            }
            $scope.updateFormBtn = "Add New Row";
            $scope.formObj = {otherformat: "", price: "", newfrom: "", usedfrom: ""};
        }
    };
});
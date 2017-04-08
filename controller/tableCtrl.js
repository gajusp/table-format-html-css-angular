var app = angular.module('zensarTaskApp', []);
app.controller('TableCtrl', function () {
    console.log("======= TableCtrl ========");
    var tbCtrl = this;
    tbCtrl.formObj = {otherformat: "", price: "", newfrom: "", usedfrom: ""};
    tbCtrl.updateFormBtn = "Add New Row";
    tbCtrl.selectedIndex = -1;
    tbCtrl.tableDataArr = [
        {otherformat: "Hardcover", price: "300", newfrom: "334.99", usedfrom: "269.99"},
        {otherformat: "Paperback", price: "150.00", newfrom: "169.99", usedfrom: "119.99"},
        {otherformat: "Audio, CD, Audiobook, Unabridge", price: "180.00", newfrom: "89.99", usedfrom: "60.99"},
        {otherformat: "Unknown Binding", price: "50.00", newfrom: "50.00", usedfrom: "50.00"}
    ];

    /**
     * selected item in row
     */
    tbCtrl.onUpdateData = function (item, indx) {
        tbCtrl.formObj = angular.copy(item);
        tbCtrl.selectedIndex = indx;
        tbCtrl.updateFormBtn = "Update Details";
    };

    /**
     * Update the selected data
     */
    tbCtrl.onDeleteData = function (indx) {
        tbCtrl.tableDataArr.length > 0 && tbCtrl.tableDataArr.splice(indx, 1);
    };

    /**
     * Update details
     */
    tbCtrl.onAddUpdateDetails = function (updateForm) {
        if (updateForm.$valid) {
            //add row
            if (tbCtrl.selectedIndex === -1) {
                tbCtrl.tableDataArr.push(tbCtrl.formObj);
            } else {
                //update row
                tbCtrl.tableDataArr[tbCtrl.selectedIndex] = tbCtrl.formObj;
                //clear index
                tbCtrl.selectedIndex = -1;
            }
            tbCtrl.updateFormBtn = "Add New Row";
            tbCtrl.formObj = {otherformat: "", price: "", newfrom: "", usedfrom: ""};
        }
    };
});
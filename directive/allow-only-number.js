/**
 * onlyNum & restrict 5 char length , A directive that allow only numbers
 */
angular.module('zensarTaskApp').directive('allowOnlyNumbers', function () {
    return {
        restrict: 'A',
        link: function (scope, elm, attr) {
            elm.on('input load', function () {
                if (String(attr.allowOnlyNumbers) === 'dial' && String(this.value.charAt(0)) === '0') {
                    this.value = '';
                }
            });
            elm.on('keydown', function (event) {
                if (event.which === 64 || event.which === 16) {
                    // to allow numbers
                    return false;
                } else if (event.which >= 48 && event.which <= 57) {
                    // to allow numbers
                    return true;
                } else if (event.which >= 96 && event.which <= 105) {
                    // to allow numpad number
                    return true;
                } else if ([8, 13, 27, 37, 38, 39, 40, 190, 110].indexOf(event.which) > -1) {
                    // to allow backspace, enter, escape, arrows
                    return true;
                } else if (this.value && this.value.split(".").length > 2) {
                    this.value = this.value.subString(this.value.lastIndexOf(".")-1, 2);
                    event.preventDefault();
                    // to stop others
                    return false;
                }
            });
            /* Disable Cut Copy Paste */
            elm.on('cut copy paste', function (event) {
                event.preventDefault();
            });
        }
    };
});

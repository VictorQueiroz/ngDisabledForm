'use strict';

(function() {
  /*
   * This directive, helps you to disable all fields in a form easily.
   *
   * @author Victor Queiroz <victorcqueirozg@gmail.com>
   * @license http://license.visualidiot.com
   */

  /*
   * These functions were copied from the original AngularJS source code.
   */
  var isString = angular.isString;
  var lowercase = function(string){return isString(string) ? string.toLowerCase() : string;};
  var toBoolean = function toBoolean(value) {
    if (typeof value === 'function') {
      value = true;
    } else if (value && value.length !== 0) {
      var v = lowercase("" + value);
      value = !(v == 'f' || v == '0' || v == 'false' || v == 'no' || v == 'n' || v == '[]');
    } else {
      value = false;
    }
    return value;
  };

  /*
   * 
   */
  var ngDisabledFormDirective = function() {
    return function (scope, element, attr) {
      var el = element[0].querySelectorAll('input, select, button, textarea');

      scope.$watch(attr.disableForm, function(value) {
        var disableAllInputs = function(el)
        {
          angular.element(el).attr('disabled', '').addClass('disabled');
        };

        var enableAllInputs = function(el)
        {          
          angular.element(el).removeAttr('disabled', '').removeClass('disabled');
        };

        toBoolean(value) ? disableAllInputs() : enableAllInputs();
      });
    };
  };

  /*
   *
   */
  angular.module('ngDisabledForm', []).

  directive('ngDisabledForm', ngDisabledFormDirective);
}).call(this);

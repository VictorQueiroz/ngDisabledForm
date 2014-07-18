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
  
      var enabledElements = element[0].querySelectorAll('input:not(:disabled):not([class*=ng-input-default-disabled]):not([ng-enabled]), select:not(:disabled):not([class*=ng-input-default-disabled]):not([ng-enabled]), textarea:not(:disabled):not([class*=ng-input-default-disabled]):not([ng-enabled]), button:not(:disabled):not([class*=ng-input-default-disabled]):not([ng-enabled])');
      var disabledElements = element[0].querySelectorAll('input:disabled, select:disabled, button:disabled, textarea:disabled');
  
      scope.$watch(attr.ngDisabledForm, function(value) {
        var disableAllInputs = function() {
          angular.element(disabledElements).addClass('ng-input-default-disabled');
          angular.element(enabledElements).attr('disabled', '').addClass('disabled');
        };
  
        var enableAllInputs = function() {
          angular.element(enabledElements).removeAttr('disabled').removeClass('disabled');
          angular.element(disabledElements).attr('disabled', '').addClass('disabled').removeClass('ng-input-default-disabled');
        };
  
        toBoolean(value) ? disableAllInputs(element) : enableAllInputs(element);
      });
  
    };
  }

  /*
   *
   */
  angular.module('ngDisabledForm', []).

  directive('ngDisabledForm', ngDisabledFormDirective);
}).call(this);

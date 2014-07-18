ngDisabledForm
==============

Disable all inputs, selects, buttons and textareas on a form.

### Installing via bower:

```
  bower install ng-disabled-form
```

### Usage:

It is quite simple! Look:
```
  <form ng-disabled-form="true">
    <input type="text" value="">
  </form>
```

And if you want to keep a single input by default disabled, you should add ```ng-input-default-disabled``` class to the element, and ```ng-enabled``` attribute if you want to make the input enabled forever no matter what. Just like this:
```
  <form ng-disabled-form="true">
    <input type="text" value="" class="ng-input-default-disabled">
    <input type="email" value="" ng-enabled>
  </form>
```

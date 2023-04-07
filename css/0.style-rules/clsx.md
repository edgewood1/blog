  clsx

- makes dynamic classes easier

- disabled and invalid are properties, which are defined at the start
- on each render, the class calls a function that draws on the state of these 2 properties:



```
<div class$="[[_getClassNames(disabled, invalid)]]">
```

- the function will return the following classes based on the state of these properties:

```
  private _getClassNames(disabled, invalid) {
    return clsx('mdc-text-field', 'mdc-text-field--textarea', {
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--invalid': invalid,
    });
  }
```

-  another example of a clsx return:

```
return clsx({
      'tab-disabled': _isLeadZoomed,
      'study--actionFailed': this._actionFailureStudyIDs.find((id: number) => item.Id === id) !== undefined,
      'study--isLocked': item.IsLocked,
      'study--isStat': item.IsStat,
      'study--isCriticalAlert': item.IsCriticalAlert,
    });
```



-  and corresponding tag

```
<mwc-tab class = "{{_getClass(_isLeadZoomed)}}" label="{{localize('124')}}"></mwc-tab>
```

**Last example**

how clsx works: 



define property

this.mini ...



apply class

whenever this renders it will gather these 3 properties and call the class

​      <button

​        class$="mdc-fab [[_getClasses(mini, extended, exited)]]"



\3. function will return the following classes based on the status of these properties:



  private _getClasses(mini, extended, exited) {

​    return clsx({

​      'mdc-fab--extended': extended,

​      'mdc-fab--exited': exited,

​      'mdc-fab--mini': mini,

​    });

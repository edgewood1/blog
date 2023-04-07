# DIALOG BOXES
1. add html
2. create query reference to its id
3. create a function that opens / closes
4. style using id

# VAADIN

1. html
```html
    <vaadin-dialog id="assignSiteDialog">
      <template>
        <vaadin-combo-box label="Site" items="[[_allowedSiteCodes]]" value="{{_selectedSiteForAssignment}}"></vaadin-combo-box>
        <div class="actions">
          <mwc-button dense on-tap="_closeSiteAssignmentDialog">Cancel</mwc-button>
          <mwc-button dense disabled="[[eqq(_selectedSiteForAssignment, '')]]" raised on-tap="_confirmSiteAssignment">Assign</mwc-button>
        </div>
      </template>
    </vaadin-dialog>
```
2. query reference

```javascript

$: {
    assignMDDialog: Element;
    assignSiteDialog: Element;
    readingMDComboBox: Element;
    settingsDrawer: Element;
  };
```

3. close/open functions

```javascript
  private _openSiteAssignmentDialog() {
    (this.$.assignSiteDialog as any).opened = true;

    const dialog = (this.$.assignSiteDialog as any);
    // The first focusable element is a div. I have found that it does not receive focus when the
    // dialog opens.
    dialog.$.overlay._cycleTab(1, 0);
  }

 private _closeSiteAssignmentDialog(): void {
    (this.$.assignSiteDialog as any).opened = false;
    this._selectedSiteForAssignment = '';
  }
```

# PAPER

√Use the dialog-dismiss and dialog-confirm attributes on interactive controls to close the dialog. If the user dismisses the dialog with dialog-confirm, the closingReason will update to include confirmed: true.
See PaperDialogBehavior and IronOverlayBehavior for specifics.

  1. our dialog box
  // 
```html
    <paper-dialog id="editStatementDialog" with-backdrop="">
      <div>
        <h3>Edit Statement</h3>
        <mdc-autogrow-textarea id="interpEditArea" value="{{_editStatementInput}}"></mdc-autogrow-textarea>
      </div>
      <div class="buttons">
        <mwc-button on-tap="_closeStatementDialog">Cancel</mwc-button>
        <mwc-button id="submitBtn" on-tap="_saveStatementHandler">Submit</mwc-button>
      </div>
    </paper-dialog>
```

2. setup query - a property reference to it
```javascript
  @query('#editStatementDialog')
  editStatementDialog: PaperDialogElement;
```

3. close / open functions for it that uses the reference.  These functions are called by the 'ontap of specific buttons.

```javascript
  private _closeStatementDialog(): void {
    this.editStatementDialog.close();
  }

  // open functino

    private _handleEditStatement({ detail: { text, index } }): void {
    this._editStatementInput = text;
    this._editStatementIndex = index;
    this.editStatementDialog.open();
  }
```

4. css 

```css
      #editStatementDialog {
        width: 75%;
        max-width: 800px;
      }

      #editStatementDialog mdc-autogrow-textarea {
        margin-top: 10px;
        width: 100%;
      }
```
    ------------------------------

        <paper-dialog id="udiDialog" with-backdrop="">
      <div>
        <h3>Our Mission Statementt</h3>
        <mdc-autogrow-textarea id="interpEditArea" value="{{_editStatementInput}}"></mdc-autogrow-textarea>
      </div>
      <div class="buttons">
        <mwc-button on-tap="udi_barcodeClose">Close</mwc-button>
      </div>
    </paper-dialog>

    ----------


  @query('#udiDialog')
  udiDialog: PaperDialogElement;

      private udi_barcodeOpen(): void {
    console.log("udi barcode open")
    this.udiBarcode.open()
  }

  private udi_barcodeClose(): void {
    console.log("udi barcode close")
    this.udiBarcode.close()
  }
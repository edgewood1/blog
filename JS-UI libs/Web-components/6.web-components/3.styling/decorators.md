__query__

import { customElement, property, query } from '@polymer/decorators';

 @query('#appNotification')
  appNotification: PaperToastElement;

  @query('#editStatementDialog')
  editStatementDialog: PaperDialogElement;

__properties__

  /** Name of the currently selected page. */
  @property({ type: String, reflectToAttribute: true, observer: '_pageChanged' })
  page: string;

  /** Currently selected study ID */
  @property({ type: Number })
  studyId: number;

  __JS docs__

  

var car = {
  @readonly
  name: "jack"
}


function readonly(target, key, descriptor) {
  descriptor.value = "mel"
  return descriptor
}
export default class FormState {
  constructor({ submit, handleFailure, handleSuccess, infoComponent }) {
    this.submit = submit;
    this.handleFailure = handleFailure;
    this.handleSuccess = handleSuccess;
    this.infoComponent = infoComponent;
  }
}

export default class FormState {
  constructor({ startLoading, handleFailure, handleSuccess, infoComponent }) {
    this.startLoading = startLoading;
    this.handleFailure = handleFailure;
    this.handleSuccess = handleSuccess;
    this.infoComponent = infoComponent;
  }
}

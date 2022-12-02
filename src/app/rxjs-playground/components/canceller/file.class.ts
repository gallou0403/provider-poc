export class UploadFile {
  name: string;
  isLoading = true;
  isSuccess = false;

  constructor(name: string) {
    this.name = name;
  }
}

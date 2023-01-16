import { Component } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {


  constructor(private http: HttpClient) {}

  working = false;
  uploadFile: File | null | undefined;
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: number =0;
  uploadUrl: string ="";

  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.uploadFile = files.item(0);
      this.uploadFileLabel = this.uploadFile?.name;
    }
  }

  upload() {
    if (!this.uploadFile) {
      alert('Choose a file to upload first');
      return;
    }

    const formData = new FormData();
    formData.append("ImangFile", this.uploadFile);

    const url = "https://localhost:7089/api/ProductMaster/UploadImage";
    const uploadReq = new HttpRequest('POST', url, formData, {
      reportProgress: true,
    });

    this.uploadUrl = '';
    this.uploadProgress = 0;
    this.working = true;

    this.http.request(uploadReq).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.uploadUrl = event.body.url;
      }
    }, (error: any) => {
      console.error(error);
    }).add(() => {
      this.working = false;
    });
  }
}
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadSuccess = false;
  uploadError = false;
  fileName: string | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<{ filePath: string }>('/api/upload', formData).subscribe(
      (response) => {
        this.uploadSuccess = true;
        this.uploadError = false;
        this.fileName = this.selectedFile!.name; // Salva il nome del file caricato
        console.log('File uploaded successfully:', response.filePath);
      },
      (error: HttpErrorResponse) => {
        this.uploadSuccess = false;
        this.uploadError = true;
        console.error('Error uploading file:', error.message);
      }
    );
  }
}

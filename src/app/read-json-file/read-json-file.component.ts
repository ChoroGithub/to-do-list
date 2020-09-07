import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read-json-file',
  templateUrl: './read-json-file.component.html',
  styleUrls: ['./read-json-file.component.css']
})
export class ReadJsonFileComponent implements OnInit {

  uploadedFiles: Array<File>;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }


  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('/api/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      })
  }
}

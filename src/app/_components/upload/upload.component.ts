import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import "../../_prototypes/format.prototype"
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  commentsList: object;
  isloading: boolean = false;
  arrayBuffer: any;
  file: File;
  fileinfo: any = [];

  router: any;
  urlpart: string;
  constructor(private _router: Router, private activeRoute: ActivatedRoute, private http: HttpClient) {
    this.router = _router;
    this.urlpart = this.router.url.checkRoute();


  }

  ngOnInit() {
  }

  localUrl: any[];

  incomingfile(event: any) {
    // this.file = event.target.files[0];

    this.getFileInformation(event);
  }

  getUrl(event: any) {
    // let fileList: FileList = event.target.files;
    // if(fileList.length > 0) {
    //     let file: File = fileList[0];
    //     let formData:FormData = new FormData();
    //     formData.append('uploadFile', file, file.name);

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }

  }


  deleteRecord(row: any) {
    var index = this.fileinfo.indexOf(row);
    if (index > -1) {
      this.fileinfo.splice(index, 1);
    }
  }

  getFileInformation(event: any) {
    this.getUrl(event);
    if (event.target.files && event.target.files[0]) {
      let fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        debugger;
        this.fileinfo.push(
          { 'filename': fileList[0].name, 'size': fileList[0].size, 'type': fileList[0].type, 'lastModifiedDate': fileList[0].lastModifiedDate, 'fileData': this.localUrl }
        );
      }

    }
  }
  bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    //  var i= parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    // return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  };

  public currentName;

  selectedUpload(event: any, item: any){
    this.currentName = item.filename;
  }
}

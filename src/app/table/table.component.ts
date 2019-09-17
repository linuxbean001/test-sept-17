import { Component, OnInit } from '@angular/core';
import { ImageData } from '../model/image-data';
import { ImageDataService } from '../service/image-data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  imageDatas: ImageData[];

  constructor(private imgService: ImageDataService,
    private sanitize: DomSanitizer) { }

  ngOnInit() {
    this.imgService.getImageData().subscribe(res => {
      res.forEach(imgData => {
        imgData.imageUrl = this.sanitize.bypassSecurityTrustUrl(imgData.imageUrl);
      });
      this.imageDatas = res;
    });
  }

}

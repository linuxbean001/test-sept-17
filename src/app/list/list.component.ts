import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageData } from '../model/image-data';
import { ImageDataService } from '../service/image-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  imageData: ImageData[];

  constructor(private imgService: ImageDataService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.imgService.getImageData().subscribe(res => {
      this.imageData = res;
    })
  }

}

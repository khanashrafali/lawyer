import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IMAGE_ERROR_MSG, IMAGE_MIME_TYPES, editorConfig } from '../../../utils/data';
import { chooseFile } from '../../../utils/helper';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css'],
})
export class AddTemplateComponent implements OnInit {
  editorConfig = editorConfig();
  constructor(public location: Location) {}

  ngOnInit(): void {}

  chooseFile(event: Event, controlName: string, isChart: boolean = false) {
    const fileInfo = (event.target as HTMLInputElement)?.files;
    if (!fileInfo?.length) return;

    // if (!IMAGE_MIME_TYPES.includes(fileInfo[0].type)) return this.uiService.openSnackbar(IMAGE_ERROR_MSG);

    for (let i = 0; i < fileInfo.length; i++) {
      const fr = new FileReader();
      fr.onload = (e) => {
        // isChart ? (this.imgSrc = fr.result) : (this.imgSrc = fr.result);
      };

      fr.readAsDataURL(fileInfo[i]);
    }

    // chooseFile(event, controlName, this.form);
  }
}

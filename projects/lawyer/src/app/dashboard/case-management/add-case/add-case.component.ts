import { Component, OnInit } from '@angular/core';
import { editorConfig } from '../../../utils/data';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.css'],
})
export class AddCaseComponent implements OnInit {
  editorConfig = editorConfig();
  constructor() {}

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

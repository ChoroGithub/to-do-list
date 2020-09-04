import { Component, OnInit, Input } from '@angular/core';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-save-lists-to-json',
  templateUrl: './save-lists-to-json.component.html',
  styleUrls: ['./save-lists-to-json.component.css']
})
export class SaveListsToJsonComponent implements OnInit {

  @Input() productLists;

  constructor() { }

  ngOnInit(): void {
  }

  saveDataAsJSON() {
    const blob = new Blob([JSON.stringify(this.productLists)], { type: 'application/json' });
    fileSaver.saveAs(blob, 'productLists.json');
  }
}

import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  minValue: number = 0;
  maxValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<i class="fa fa-inr" aria-hidden="true"></i>' + value;
        case LabelType.High:
          return '<i class="fa fa-inr" aria-hidden="true"></i>' + value;
        default:
          return '<i class="fa fa-inr" aria-hidden="true"></i>' + value;
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}

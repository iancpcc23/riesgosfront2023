import { Component, Input, OnInit } from '@angular/core';
import { AppState } from 'src/domain/models/app-state.interface';
import { DataState } from 'src/domain/models/data-state.enum';
import { IResponse } from 'src/domain/models/response.interface';

type SuccessOrError = { ok: boolean, key: string, message: string }

@Component({
  selector: 'app-success-box',
  templateUrl: './success-box.component.html',
  styleUrls: ['./success-box.component.css']
})

export class SuccessBoxComponent implements OnInit {
  readonly DataState = DataState;
  @Input() listItems: AppState<IResponse>[] = []
  // proceduresExecuted: SuccessOrError[]

  ngOnInit(): void {

    console.log('Items', this.listItems);
    
  }


}

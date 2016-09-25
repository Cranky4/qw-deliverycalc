import {Component, OnInit, Output, EventEmitter} from "@angular/core";

export interface IExampleParams {
    weight: number;
    cost: number;
}

@Component({
    selector: 'app-examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
    @Output() onExampleChange = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public exampleChange(params:IExampleParams) {
        this.onExampleChange.emit(params);
    }
}

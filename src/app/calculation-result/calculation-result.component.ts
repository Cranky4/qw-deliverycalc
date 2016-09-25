import {Component, OnInit, Input} from "@angular/core";


export interface IMethod {
    customs_info: string;
    delivery_time: string;
    insurance: number;
    method: string;
    packing: number;
    payment_gateway_fee: number;
    shipping_cost: number;
    shophelp: number;
    total: number;
}

@Component({
    selector: 'app-calculation-result',
    templateUrl: './calculation-result.component.html',
    styleUrls: ['./calculation-result.component.css']
})
export class CalculationResultComponent implements OnInit {

    @Input() methods: IMethod[];

    constructor() {
    }

    ngOnInit() {
    }
}

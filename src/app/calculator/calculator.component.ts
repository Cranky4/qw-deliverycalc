import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {QwintryApiService} from "./shared/qwintry-api.service";
import {IMethod} from "../calculation-result/calculation-result.component";
import {Method} from "../calculation-result/shared/method";
import {IExampleParams} from "../examples/examples.component";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

    public countries: any[] = [
        {code: 'RU', name: 'Russia'},
        {code: 'KZ', name: 'Kazakhstan'},
        {code: 'UA', name: 'Ukraine'},
    ];

    public country: string;

    public weight: number;

    public cost: number;

    public shop_help: boolean;

    public insurance: boolean;

    public errors: any[] = [];

    public isCalculated = false;

    public isLoading = null;

    public methods: IMethod[] = [];

    constructor(private qwapi: QwintryApiService) {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.isCalculated = false;
        if (!form.valid) {
            for (let field in form.controls) {
                if (form.controls.hasOwnProperty(field)) {
                    let control = form.controls[field];
                    if (!control.valid) {
                        // this.errors[field] = "required";
                        control.markAsTouched();
                    }
                }
            }
            return false;
        }

        this.isLoading = true;

        this.qwapi.calculate(this.weight, this.country, this.cost, this.insurance, this.shop_help)
            .subscribe(
                (data) => {
                    this.methods = this.extractCalculations(data.json());
                },
                (error) => {
                    console.error(error);
                    this.isLoading = null;
                }
            );
    }

    public getError(field) {
        return this.errors[field] || false;
    }

    private extractCalculations(rawdata: any): IMethod[] {
        let data = rawdata.data || [];

        if (data == []) {
            console.log('emtpy data');
            return [];
        }

        let methods = [];

        for (let methodRawData of data) {
            for (let methodName in methodRawData) {
                if (methodRawData.hasOwnProperty(methodName)) {
                    let methodData = methodRawData[methodName];
                    let method = new Method();
                    for (let methodField in methodData) {
                        if (methodData.hasOwnProperty(methodField)) {
                            method[methodField] = methodData[methodField];
                        }
                    }
                    methods.push(method);
                }
            }
        }

        this.isCalculated = true;
        this.isLoading = null;
        return methods;
    }

    public setExample(params:IExampleParams) {
        this.cost = params.cost;
        this.weight = params.weight;
    }
}

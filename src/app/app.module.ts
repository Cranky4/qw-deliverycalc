import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {QwintryApiService} from "./calculator/shared/qwintry-api.service";
import { CalculationResultComponent } from './calculation-result/calculation-result.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
    declarations: [
        AppComponent,
        CalculatorComponent,
        CalculationResultComponent,
        ExamplesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        QwintryApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

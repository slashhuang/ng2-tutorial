import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TabModule } from './tab/tab.module';
@NgModule({
    imports:      [ BrowserModule,TabModule ],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

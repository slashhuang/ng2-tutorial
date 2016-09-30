import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router'; //引入路由指令
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TabModule } from './tab/tab.module';
import { RouteViewModule  } from './router-view/route.module';
import { AppRouting } from './app.routing';
@NgModule({
    imports:      [ BrowserModule,RouterModule,TabModule,AppRouting,RouteViewModule ],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

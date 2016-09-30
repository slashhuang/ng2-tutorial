/**
 * Created by slashhuang on 16/9/30.
 */
import { NgModule }      from '@angular/core';
//基本指令库
import { CommonModule }   from '@angular/common';
import { AppRouting }  from './route.routing';
import {Route1Component} from './route1.component';
import {Route2Component} from './route2.component';
import {Route1SubComponent} from  './route1.sub.component';
import { Route2SubComponent } from './route2.sub.component';
import { IndexComponent } from './index.module';

@NgModule({
    imports:[CommonModule,AppRouting],
    //定义本模块的directive相关
    declarations:[IndexComponent,Route1Component,Route2Component,Route1SubComponent,Route2SubComponent]
})
export class RouteViewModule{

}
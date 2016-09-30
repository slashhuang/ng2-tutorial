/**
 * Created by slashhuang on 16/9/30.
 * tab组件
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TabComponent } from './tab.component';
@NgModule({
    imports :[CommonModule],
    declarations:[TabComponent],
    exports:[TabComponent] //exports属性导出供其余模块引用的directives/pipes/module
})
export class TabModule {

};

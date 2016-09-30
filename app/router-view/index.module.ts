/**
 * Created by slashhuang on 16/9/30.
 * 首页展示hello world
 */


import { Component } from '@angular/core';
@Component({
    template: `<div class="index"> 
               欢迎使用ng2-tutorial来学习angular2
               </div>`,
    styles: ['.index {text-align:center;background: lightgoldenrodyellow;padding:20px;font-size:25px}']
})
export class IndexComponent { }

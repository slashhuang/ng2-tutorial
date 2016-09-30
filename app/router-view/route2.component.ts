/**
 * Created by slashhuang on 16/9/30.
 */

import { Component } from '@angular/core';
@Component({
    template:  `<div class="router2"> 
               <h2>这是route2 view, 
               <a routerLink="/route2/router2-subRoute">
               点击router2的子路由
               </a></h2>
               <router-outlet></router-outlet>
               </div>`,
    styles: ['.router2 {background: lightseagreen;padding:20px}']

})
export class Route2Component { }

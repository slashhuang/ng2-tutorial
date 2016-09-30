/**
 * Created by slashhuang on 16/9/30.
 */

import { Component } from '@angular/core';
@Component({
    template: `<div class="router1"> 
               <h2>这是route2 view, 
               <a routerLink="/route1/router2-subRoute">
                点击router1的子路由
               </a></h2>
               <router-outlet></router-outlet>
               </div>`,
    styles: ['.router1 {background: lightcoral;padding:20px}']
})
export class Route1Component { }

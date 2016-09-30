/**
 * Created by slashhuang on 16/9/30.
 * 路由1的子路由
 */

import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template: `<p>我是路由2的子路由</p>
               <p>通过路由传递的参数是hello:{{RouterId}}</p>`
})
export class Route2SubComponent implements OnInit{
    RouterId:string;
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ){ }

    ngOnInit() {
       this.RouterId =  this.route.snapshot.params['hello']
    }
}

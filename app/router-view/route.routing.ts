/**
 * Created by slashhuang on 16/9/30.
 * 路由模块
 * 主程序入口提供路由服务,angular2目前在路由层面默认在topLevel需要定义router
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1.component';
import { Route2Component } from './route2.component';
import { Route1SubComponent } from  './route1.sub.component';
import { Route2SubComponent } from './route2.sub.component';
import { IndexComponent } from './index.module';
const mainRoutes: Routes = [
    {
        path:'',
        component:IndexComponent
    },
    {
        path: 'route1',
        component:Route1Component,
        children: [
            {
                path: ':id',
                component: Route1SubComponent
            },
            {
                path: '',
                component: null
            }
        ]
    },
    {
        path: 'route2',
        component:Route2Component,
        children: [
            {
                path: ':hello',
                component: Route2SubComponent
            },
            {
                path: '',
                component: null
            }
        ]
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(mainRoutes);


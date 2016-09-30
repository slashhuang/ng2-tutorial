/**
 * Created by slashhuang on 16/9/30.
 * 路由模块
 * 主程序入口提供路由服务,angular2目前在路由层面默认在topLevel需要定义router
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const mainRoutes: Routes = [
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(mainRoutes);


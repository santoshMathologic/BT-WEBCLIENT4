import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar.component';
import { AuthGuard } from "../../_guards/auth.guard";

const routes: Routes = [{
    path: '', component: LeftSidebarComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard],
            children: [
                { path: 'home', loadChildren: '../home/home.module#HomeModule' },
                { path: 'blank', loadChildren: '../blank/blank.module#blankModule' },
                { path: 'userPlan', loadChildren: '../userplan/userplan.module#UserplanModule' },
                { path: 'train', loadChildren: '../train/train.module#TrainModule', canActivate: [AuthGuard] },
                { path: 'trainstation', loadChildren: '../train-station/train-station.module#trainStationModule' },
                { path: 'charts', loadChildren: '../charts/charts.module#nChartsModule' },
                { path: 'user', loadChildren: './user/user.module#UserModule' },
                { path: 'upload', loadChildren: '../upload/upload.component.module#UploadModule' },
                { path: 'elements', loadChildren: '../elements/elements.module#ElementModule' }
            ]
        },
    ]
}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeftSidebarRouting { }

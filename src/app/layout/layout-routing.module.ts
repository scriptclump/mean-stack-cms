import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
            { path: 'page/add', loadChildren: './page-add/page-add.module#PageAddModule' },
            { path: 'banners', loadChildren: './banners/banners.module#BannersModule' },
            { path: 'banner/add', loadChildren: './banner-add/banner-add.module#BannerAddModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'user/add', loadChildren: './user-add/user-add.module#UserAddModule' },
            { path: 'faq', loadChildren: './faq/faq.module#FAQModule' },
            { path: 'faq/add', loadChildren: './faq-add/faq-add.module#FAQAddModule' },
            { path: 'contact-us', loadChildren: './contacts/contacts.module#ContactsModule' },
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

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
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

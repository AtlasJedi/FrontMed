import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin/admin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

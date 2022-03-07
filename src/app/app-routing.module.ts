import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {environment} from "../environments/environment";
import {ArticleGuard} from "./guards/article.guard";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'article',
        loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
        canLoad: [ArticleGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

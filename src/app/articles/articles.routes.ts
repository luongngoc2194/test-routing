import {Routes} from "@angular/router";
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {ArticleGuard} from "../guards/article.guard";
import {ArrticleDetailEditComponent} from "./article-detail/arrticle-detail-edit/arrticle-detail-edit.component";

export const articlesRoutes: Routes = [
    {path: '', component: ArticleListComponent},
    {
        path: ':slug',
        canActivateChild: [ArticleGuard],
        children: [
            {path: '', component: ArticleDetailComponent},
            {path: 'edit', component: ArrticleDetailEditComponent, canDeactivate: [ArticleGuard]},
        ]
    }

]

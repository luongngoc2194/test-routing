import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {RouterModule} from "@angular/router";
import {articlesRoutes} from "./articles.routes";
import { ArrticleDetailEditComponent } from './article-detail/arrticle-detail-edit/arrticle-detail-edit.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent, ArrticleDetailEditComponent],
  imports: [
    CommonModule, RouterModule.forChild(articlesRoutes), ReactiveFormsModule
  ]
})
export class ArticlesModule { }

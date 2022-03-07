import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {Article} from "../models/article";
import {map} from "rxjs/operators";
import {Params} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor() {
    }

    get article$() {
        return of<Article[]>([
            {
                title: 'title1',
                body: 'This tutorial introduces you to the essentials of Angular by walking you through building',
                slug: 'slug1'
            },
            {
                title: 'title2',
                body: 'This tutorial introduces you to the essentials of Angular by walking you through building',
                slug: 'slug2'
            },
        ])
    }

    getArticle(slug: string){
        return this.article$.pipe(map(article => article.find(ar => ar.slug === slug)))
    }
}

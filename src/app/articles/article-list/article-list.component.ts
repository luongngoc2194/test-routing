import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";

@Component({
    selector: 'app-article-list',
    template: `
        <ul>
            <li *ngFor="let article of article$ | async"
                style="border: 1px solid black; padding: 20px ; margin-bottom: 10px">{{article.title}}
                <br>
                <a [routerLink]="['/article',article.slug]" style="margin-right: 20px">Read more</a>
                <a [routerLink]="['/article',article.slug,'edit']">edit</a>
            </li>
        </ul>
    `,
    styles: []
})
export class ArticleListComponent implements OnInit {

    article$: Observable<Article[]>

    constructor(private articleService: ArticleService) {

    }

    ngOnInit(): void {
        this.article$ = this.articleService.article$;
    }

}

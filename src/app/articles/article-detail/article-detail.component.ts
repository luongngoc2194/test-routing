import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {Observable} from "rxjs";
import {Article} from "../../models/article";
import {filter, pluck, switchMap} from "rxjs/operators";

@Component({
    selector: 'app-article-detail',
    template: `
        <ng-container *ngIf="article$ |async as article , else noArticle">
            <h1>{{article.title}}</h1>
            <p>{{article.body}}</p>
        </ng-container>
        <ng-template #noArticle>No article found</ng-template>
    `,
    styles: []
})
export class ArticleDetailComponent implements OnInit {
    article$: Observable<Article>

    constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    }

    ngOnInit(): void {
        this.article$ = this.route.params.pipe(
            pluck('slug'),
            switchMap(slug => this.articleService.getArticle(slug)),
            filter(article => !!article)
        )
    }

}

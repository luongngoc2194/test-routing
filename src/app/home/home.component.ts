import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";

@Component({
    selector: 'app-home',
    template: `
        <p>
            home works!
        </p>
<!--        <ul>-->
<!--            <li *ngFor="let article of article$ | async"-->
<!--                style="border: 1px solid black; padding: 20px ; margin-bottom: 10px">{{article.title}}-->
<!--                <br>-->
<!--                <a [routerLink]="['/detail',article.slug]">Read more</a>-->
<!--            </li>-->
<!--        </ul>-->
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    // article$: Observable<Article[]>

    constructor(private articleService: ArticleService) {

    }

    ngOnInit(): void {
        // this.article$ = this.articleService.article$ ;
    }

}

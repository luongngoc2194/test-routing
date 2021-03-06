import {Component, OnInit} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../../services/article.service";
import {filter, pluck, shareReplay, switchMap, take, takeUntil} from "rxjs/operators";
import {Article} from "../../../models/article";
import {CheckDeActivate} from "../../../check-deActivate";

@Component({
    selector: 'app-arrticle-detail-edit',
    template: `
        <form [formGroup]="form$ | async">
            <label for="title">Title</label>
            <input type="text" id="title" formControlName="title">
            <br><br>
            <label for="body">Body</label>
            <textarea type="text" id="body" formControlName="body"></textarea>
            <br><br>
        </form>
    `,
    styles: []
})
export class ArrticleDetailEditComponent implements OnInit ,CheckDeActivate{

    private $destroy = new Subject()
    form$: Observable<FormGroup>;
    initialFormValue: unknown

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private articleService: ArticleService) {
    }

    ngOnInit(): void {
        this.form$ = this.route.params.pipe(
            pluck('slug'),
            switchMap(slug => this.articleService.getArticle(slug)),
            filter(article => !!article),
            switchMap(article => of(this.initForm(article))),
            shareReplay(1)
        )
    }
    checkDeActicate(): Observable<boolean> {
        let formValue : unknown;
        this.form$.pipe(take(1)).subscribe(form => {
            formValue= form.getRawValue()
        })
        const isEdited = JSON.stringify(this.initialFormValue)!== JSON.stringify(formValue)
        return of(!isEdited || confirm('Do you want to cancel changes?'))
    }

    private initForm(article: Article) : FormGroup {
        const form = this.fb.group({
            title : [article.title],
            body : [article.body]
        })
        this.initialFormValue = form.getRawValue()
        return form
    }
}

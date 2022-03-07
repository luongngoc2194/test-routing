import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanActivateChild,
    CanLoad, CanDeactivate
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {map} from "rxjs/operators";
import {CheckDeActivate} from "../check-deActivate";

@Injectable({
    providedIn: 'root'
})
export class ArticleGuard implements CanActivate, CanActivateChild, CanLoad,CanDeactivate<CheckDeActivate> {

    constructor(private authService: AuthService) {
    }

    canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        // return of(false)
        return this.authService.currentUser.pipe(map(user => {
            if (user.userName === 'chauss') return true
            else return false
        }))
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.currentUser.pipe(map(user => {
            if (user.userName === 'chauss') return true
            else return false
        }));
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const targetSlug = childRoute.params.slug;
        if (!targetSlug) {
            return of(false)
        }
        return this.authService.currentUser.pipe(map(user => user.article.includes(targetSlug)))
    }

    canDeactivate(component: CheckDeActivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.checkDeActicate(currentRoute,currentState,nextState);
    }
}

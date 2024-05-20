import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { firstValueFrom} from 'rxjs';
import {AuthService} from "../services/api/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
    ) {
    }

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean | UrlTree> {

        try {
            let result = await firstValueFrom(this.authService.profile());
            return true;
        } catch (e: any) {
            return false;
        }
    }

}

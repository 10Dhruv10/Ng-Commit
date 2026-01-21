import { Routes, ResolveFn } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Error404Component } from './error404/error404.component';
import { inject } from '@angular/core';
import { userService } from './user/user.services';
import { TitleResolverComponent } from './title-resolver/title-resolver.component';
import UserComponent from './user/user.component';
// import {authGuard} from './guards/auth.guard';


//PageTitle Topic, if user visites a route like '/products?id=Laptop' then this will return 'Laptop'
const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];



export const routes: Routes = [

    {
        path: '',
        component: HomePageComponent,
        title: 'Home page',                                 //title of home page
    },

    {   //parameters, :id is a parameterm, when user visits user/1, id becomes 1 and id comes in UserProfileComponent.
        path: 'user/:id',
        component: UserProfileComponent
    },

    {   
        //redirect anyone reaching user to homepage ''
        path: 'user',
        redirectTo: '',
        pathMatch: 'full'
    },


    {
        //eagerly-loading: default, loads everything at home page, slower
        //lazy-loading: when we want to load JS libraries when user visit that page
        path: 'lazyuser',
        loadComponent: () => import('./lazyloaduser/lazyloaduser.component').then(x => x.LazyloaduserComponent)

    },


    {   
        //for services, ig isPremium flag is true load user.component, here i have used
        //default in my user component class thats why i dont need to use .then()
        path: 'userService',
        canMatch: [() => inject(userService).isPremium],
        loadComponent: () => import('./user/user.component')
    },

    {   
        //in both the examples i have used GUARDS, 
        //they are array containing everything that must be True for the loadcomponent to work, 
        //all guards will be stored in canMatch: []
        path: 'userService',                                 //same link
        canMatch: [() => !inject(userService).isPremium],    // (not)!False is True
        loadComponent: () => import('./lazyloaduser/lazyloaduser.component').then(x => x.LazyloaduserComponent)
    },

    {   
        //page title is not constant and changes dynamically based on titleResolver function
        path: 'resolver',
        component: TitleResolverComponent,
        title: titleResolver   //i declared titleResolver above
    },

    {
        path: 'nestedroutes',
        component: UserComponent,
        
        //for 'childs/info' or 'childs/reviews'
        children: [
            {
                path: 'info',
                component: UserProfileComponent,
                data: { roles: ['guest'] }
            },
            {
                path: 'reviews',
                component: TitleResolverComponent
            }
        ]
    },

    //using "names" for routerOutlet, we write that name as 'outlet' here
    //visit this http://localhost:4200/(secondary:secondaryroute)
    {
        path: 'secondaryroute',
        component: TitleResolverComponent,
        outlet: 'secondary'

    },

    /*
    Guards to ensure if user is able to access UX, backend can prevent user from getting 
    data of that page but browser still loads frontend of that page, to stop laoding use it

    { 
        path: 'guards',
        component: GuardComponent,
        canActivate: [authGuard]        Can User enter this route?
        canActivateChild: [authGuard]   Can User enter any child of this route?
        CanDeactivate: []               Can user with unsaved changes leave?
        CanMatch: []                    if User role/condition matches then run this component or else load other

    },

    */


    {   //wildcards, used to show any other link than the one's above ('', 'user/:id'),
        // it needs to be placed at last because angular uses first pass to check for urls
        // if any url matches then that will be displayed and not the ones after it.
        // ** practically means every link
    
        path: '**',
        component: Error404Component
    }

];

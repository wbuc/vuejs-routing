/* #region[red]
**** EAGER LOADING ****
#endregion
 */
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import User from './components/user/User.vue'

/* #region[blue]
**** LAZY LOADING (For Big Applications) ****
#endregion
 */

// function lazyLoad(view) {
//     return () => import(`@/components/${view}.vue`)
// }

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    });
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    });
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    });
}



/*
#region [dark]

Register route components using either 'component', or 'components' and use named router views.

#endregion
*/
export const appRoutes = [
    {
        path: '', name: 'home', components: {
            default: Home,
            'header-top': Header,
            'header-bottom': Header
        }
    },
    {
        path: '/user', props: true, components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            {
                path: '', component: UserStart
            },
            {
                path: ':id', component: UserDetail, props: true
            },
            {
                path: ':id/edit', component: UserEdit, name: 'userEdit', props: true
            }
        ]
    },
    {
        path: '/person/:id', component: User, props: true, beforeEnter: (to, from, next) => {
            console.log('Before Enter global route triggered!')
            /*
            Check if user can access the route?
            */
            if (false) {
                next();
            } else {
                // redirect if user cannot access page.
                next({ name: 'home' });
                // or next(false) to prevent navigation.
            }
        }
    },
    { path: '/redirect-me', redirect: '/user' },
    { path: '/redirect-me2', redirect: { name: 'home' } },
    { path: '*', redirect: { name: 'home' } } /* Genric catch all route */
];

/*
#region [purple]

set 'props: true' to receive the URL param

routes: [
    { path: '/', component: Hello }, // No props, no nothing
    { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
    { path: '/static', component: Hello, props: { name: 'world' }}, // static values
    { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
    { path: '/attrs', component: Hello, props: { name: 'attrs' }}
  ]

#endregion
*/


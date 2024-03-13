import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({route, params, cookies }) => {
   console.log('page.server.ts load() route' , route.id);
    console.log('page.server.ts load() params' , params);
    console.log('page.server.ts load() cookies' , cookies);

    // set Cookies
    cookies.set('colorTheme', 'dark', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
    });

    // // set another cookie
    // cookies.get("isFirstVisit") || cookies.set("isFirstVisit", "true", {
    //     path: '/',
    //     maxAge: 60 * 60 * 24 * 365,
    // });
};
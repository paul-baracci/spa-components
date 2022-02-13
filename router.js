import {routes} from '/modules/routing/routes.js';

export const handleLocation = async () => {
    const route = routes[window.location.pathname] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('content').innerHTML = html;
};

export const handleRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    handleLocation();
};


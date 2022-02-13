import {Modal} from '/modules/components/modal.js';
import {Alert} from '/modules/components/alert.js';
import {Looper} from '/modules/components/looper.js';
import * as Router from '/modules/routing/router.js';

// Route and page location handling.
window.onpopstate = Router.handleLocation;
window.route = Router.handleRoute;
Router.handleLocation();


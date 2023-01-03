const  { Router } = require('express');

const homeCltr = require('../controllers/home');

const routes = new Router();

// Add routes
routes.get('/', homeCltr.home);
routes.get('/participer', homeCltr.participer);
routes.get('/parrainer', homeCltr.parrainer);
routes.get('/questionner', homeCltr.questionner);
routes.get('/inviter', homeCltr.inviter);
routes.get('/partagez', homeCltr.partagez);
routes.get('/pouye', homeCltr.pouye);
routes.get('/donate', homeCltr.donate);
routes.get('/about', homeCltr.about);
routes.get('/mouvement', homeCltr.mouvement);
routes.get('/vision', homeCltr.vision);
routes.get('/programme', homeCltr.programme);
routes.get('/actualites', homeCltr.actualites);
routes.get('/actualites/:id', homeCltr.actualiteOne);

module.exports = routes;

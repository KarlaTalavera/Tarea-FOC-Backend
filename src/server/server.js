import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import areasRoutes from '../routes/areas.route.js';
import categoriesRoutes from '../routes/categories.route.js';
import productsRoutes from '../routes/products.route.js';
import rolesRoutes from '../routes/roles.route.js';
import usersRoutes from '../routes/users.route.js';
import werehousesRoutes from '../routes/warehouses.route.js';

dotenv.config()
export class Server {
    app;
    port;
    url_base;

    constructor() {
        this.app = express();
        this.port = process.env.API_PORT;
        this.url_base = '/api/v1';
        this.middlewares()
        this.rutas = {
            areas: `${this.url_base}/areas`,
            categories: `${this.url_base}/categories`,
            products: `${this.url_base}/products`,
            roles: `${this.url_base}/roles`,
            users: `${this.url_base}/users`,
            warehouses: `${this.url_base}/warehouses`,
        };
        this.routes();
    }

    middlewares = () => {
        this.app.use(cors())
        this.app.use(express.json());
    }

    routes = () => {
        this.app.use(this.rutas.areas, areasRoutes)
        this.app.use(this.rutas.categories, categoriesRoutes)
        this.app.use(this.rutas.products, productsRoutes)
        this.app.use(this.rutas.roles, rolesRoutes)
        this.app.use(this.rutas.users, usersRoutes)
        this.app.use(this.rutas.warehouses, werehousesRoutes)
    }

    listen = () => {
        this.app.listen(this.port, () => {
            console.log(`El servidor esta corriendo en: http://localhost:${this.port}`);
        })
    }
}

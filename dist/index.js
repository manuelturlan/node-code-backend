"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
//  Create Express APP
const app = (0, express_1.default)();
// Esto haría que nuestra aplicación se despliegue en el puerto 800
const port = process.env.PORT || 8000;
// Define the first Route of APP
// Por defecto un get devuelve un 200
app.get('/', (req, res) => {
    // Send Hello World
    res.send('Welcome to API Restful Express + Nodemon + Jest + TS + Swagger');
});
app.get('/hello', (req, res) => {
    // Send Hello World
    res.send('Welcome to GET Route: ¡Hello World!');
});
app.get('/bye', (req, res) => {
    // Send Hello World
    res.send('Good bye world');
});
// Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`Express SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
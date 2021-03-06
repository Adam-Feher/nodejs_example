import {json} from "body-parser";
import {Container} from "inversify";
import "reflect-metadata";
import {InversifyExpressServer} from "inversify-express-utils";
import "./controllers/random.controller";
import {RandomService} from "./services/random.service";
//import controller here
//import service here

const port = process.env.PORT || 8080;

const container = new Container(); // IoC container
//bind services here
container.bind<RandomService>('RandomService').to(RandomService);
const server = new InversifyExpressServer(container);
server.setConfig(app => {
    app.use(json());
});

const app = server.build();

app.listen(port, () => console.log(`Server is running on port ${port}...`));

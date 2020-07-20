import * as restify from 'restify';
import * as mongoose from 'mongoose';
import BeneficiariesController from './controllers/BeneficiariesController';
import { environment } from './environments/environment';

class App {
	public server: restify.Server;

	constructor() {
		this.server = restify.createServer();
		this.middlewares();
		this.database();
		this.routes();
	}

	private database(): void {
		mongoose.connect('mongodb://mongo:27017', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	}

	private middlewares(): void {
        this.server.use(restify.plugins.jsonBodyParser());
	}

	private routes() {
		this.server.get(`${environment.basePath}/v1/beneficiaries`, BeneficiariesController.getAll);
		this.server.get(`${environment.basePath}/v1/beneficiaries/:id`, BeneficiariesController.getById);
		this.server.post(`${environment.basePath}/v1/beneficiaries`, BeneficiariesController.create);
		this.server.put(`${environment.basePath}/v1/beneficiaries`, BeneficiariesController.update);
		this.server.del(`${environment.basePath}/v1/beneficiaries`, BeneficiariesController.remove);
	}
}

export default new App().server;

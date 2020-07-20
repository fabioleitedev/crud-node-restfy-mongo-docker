import * as restify from 'restify';
import Beneficiary from '../schemas/beneficiary';

class BeneficiariesController {
	public async getAll(req: restify.Request, res: restify.Response) {
		try {
			const beneficiaries = await Beneficiary.find();

			if (beneficiaries.length === 0) {
				return res.send(204);
			}
			return res.send(200, beneficiaries);
		} catch (error) {
			return res.send(500, error);
		}
	}

	public async getById(req: restify.Request, res: restify.Response) {
		try {
			const beneficiary = await Beneficiary.findById(req.params.id);
			if (!beneficiary) {
				return res.send(204);
			}
			return res.send(200, beneficiary);
		} catch (error) {
			return res.send(500, error);
		}
	}

	public async create(req: restify.Request, res: restify.Response) {
		try {
			const b = new Beneficiary({
				name: req.body.name,
				cpf: req.body.cpf,
				rg: req.body.rg,
				birthDate: new Date(req.body.birthDate),
				plan: req.body.plan,
				dependents: req.body.dependents,
			});

			const newDocument = await b.save();
			return res.send(201, newDocument);
		} catch (error) {
			return res.send(500, error);
		}
	}

	public async update(req: restify.Request, res: restify.Response) {
		try {
			const beneficiary = await Beneficiary.findById(req.body.id);

			if (!beneficiary) {
				return res.send(400, {
					code: '001',
					message: 'Beneficiary id does not exists.',
				});
			}

			await beneficiary.updateOne(req.body.data);
			return res.send(201, beneficiary);
		} catch (error) {
			return res.send(500, error);
		}
	}

	public async remove(req: restify.Request, res: restify.Response) {
		try {
            res.setHeader('Access-Control-Allow-Methods', '*');
			const beneficiary = await Beneficiary.findById(req.params.id);

			if (!beneficiary) {
				return res.send(400, {
					code: '001',
					message: 'Beneficiary id does not exists.',
				});
			}

			await beneficiary.deleteOne();
			return res.send(200, beneficiary);
		} catch (error) {
			return res.send(500, error);
		}
	}
}

export default new BeneficiariesController();

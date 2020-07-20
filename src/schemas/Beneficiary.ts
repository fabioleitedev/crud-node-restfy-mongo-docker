import { Schema, model } from "mongoose";
import BeneficiaryInterface from "../interfaces/BeneficiaryInterface";
import { PlanEnum } from "../enums/PlanEnum";

export default model<BeneficiaryInterface>(
	"Beneficiary",
	new Schema(
		{
			name: {
				type: String,
				required: true,
			},
			cpf: {
				type: String,
				required: true,
			},
			rg: {
				type: String,
				required: true,
			},
			birthDate: {
				type: Date,
				required: true,
			},
			plan: {
				type: PlanEnum,
				required: true,
			},
			dependents: {
				type: Number,
				required: false,
			},
		},
		{
			timestamps: true,
		}
	)
);

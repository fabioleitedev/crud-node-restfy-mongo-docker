import { Document } from "mongoose";
import { PlanEnum } from "../enums/PlanEnum";

export default interface BeneficiaryInterface extends Document {
    name: string,
    cpf: string,
    rg: string,
    birthDate: Date,
    plan: PlanEnum,
    dependents?: number
}
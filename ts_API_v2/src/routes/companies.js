import { Router } from "express";
import { createCompany, getCompanies, getCompanyById, deleteCompany, updateCompany } from "../controllers/companies.controller";
const router = Router();
//Company data
router.post("/", createCompany);
router.get("/", getCompanies);
//Company data by id
router.get("/:id", getCompanyById);
router.delete("/:id", deleteCompany);
router.put("/:id", updateCompany);

export default router;
import express from "express";
import {
  createPerson,
  deletePerson,
  getPerson,
  getSinglePerson,
  updatePerson,
} from "./personController.js";

const router = express.Router();

router.route("/").get(getPerson).post(createPerson);
router
  .route("/:id")
  .get(getSinglePerson)
  .delete(deletePerson)
  .put(updatePerson);

export default router;

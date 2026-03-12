import { Router } from "express";

export default function nudoRoutes(controller) {
  const router = Router();

  router.post("/nudos", (req, res) => controller.create(req, res));
  router.get ("/nudos", (req, res) => controller.getAll(req, res));

  return router;
}
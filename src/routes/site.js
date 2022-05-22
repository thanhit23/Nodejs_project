import express from "express";
import siteController from '../app/controllers/SiteController.js';
const router = express.Router();

router.use('/:slug', siteController.home);
router.use('/', siteController.search);

export default router;

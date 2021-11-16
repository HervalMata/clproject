import {Router} from "express";
import {CreateWishlistController} from "../../../../modules/wishlists/controllers/CreateWishlistController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {GetWishlistByUserController} from "../../../../modules/wishlists/controllers/GetWishlistByUserController";

const wishlistsRoutes = Router();
const createWishlistController = new CreateWishlistController();
const getWishlistByUserController = new GetWishlistByUserController();

wishlistsRoutes.post("/", ensureAuthenticated, createWishlistController.handle);
wishlistsRoutes.get("/", ensureAuthenticated, getWishlistByUserController.handle);

export { wishlistsRoutes };
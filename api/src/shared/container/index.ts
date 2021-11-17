import "reflect-metadata";
import {container} from "tsyringe";
import {IUsersRepository} from "../../modules/users/repositories/IUsersRepository";
import {UsersRepository} from "../../modules/users/repositories/implementations/UsersRepository";
import {IUsersTokensRepository} from "../../modules/users/repositories/IUsersTokensRepository";
import {UsersTokensRepository} from "../../modules/users/repositories/implementations/UsersTokensRepository";
import {IDateProvider} from "./providers/DateProvider/IDateProvider";
import {DayjsDateProvider} from "./providers/DateProvider/implementations/DayjsDateProvider";
import {IMailProvider} from "./providers/MailProvider/IMailProvider";
import {EtherealMailProvider} from "./providers/MailProvider/implementations/EtherealMailProvider";
import {IUsersProfileRepository} from "../../modules/users/repositories/IUsersProfileRepository";
import {UsersProfileRepository} from "../../modules/users/repositories/implementations/UsersProfileRepository";
import {IAddressRepository} from "../../modules/address/repositories/IAddressRepository";
import {AddressRepository} from "../../modules/address/repositories/implementations/AddressRepository";
import {ICategoryRepository} from "../../modules/categories/repositories/ICategoryRepository";
import {CategoryRepository} from "../../modules/categories/repositories/implementations/CategoryRepository";
import {IColorsRepository} from "../../modules/colors/repositories/IColorsRepository";
import {ColorsRepository} from "../../modules/colors/repositories/implementations/ColorsRepository";
import {IMaterialsRepository} from "../../modules/materials/repositories/IMaterialsRepository";
import {MaterialsRepository} from "../../modules/materials/repositories/implemntations/MaterialsRepository";
import {IProductsRepository} from "../../modules/products/repositories/IProductsRepository";
import {ProductsRepository} from "../../modules/products/repositories/implementations/ProductsRepository";
import {IProductImagesRepository} from "../../modules/products/repositories/IProductImagesRepository";
import {ProductImagesRepository} from "../../modules/products/repositories/implementations/ProductImagesRepository";
import {IReviewsRepository} from "../../modules/reviews/repositories/IReviewsRepository";
import {ReviewsRepository} from "../../modules/reviews/repositories/implementations/ReviewsRepository";
import {IWishlistsRepository} from "../../modules/wishlists/repositories/IWishlistsRepository";
import {WishlistsRepository} from "../../modules/wishlists/repositories/implementations/WishlistsRepository";
import {ICouponsRepository} from "../../modules/coupons/repositories/ICouponsRepository";
import {CouponsRepository} from "../../modules/coupons/repositories/implementations/CouponsRepository";
import {IDeliveriesRepository} from "../../modules/deliveries/repositories/IDeliveriesRepository";
import {DeliveriesRepository} from "../../modules/deliveries/repositories/implementations/DeliveriesRepository";
import {IPaymentsRepository} from "../../modules/payments/repositories/IPaymentsRepository";
import {PaymentsRepository} from "../../modules/payments/repositories/implementations/PaymentsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
);

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
);

container.registerInstance<IMailProvider>(
    "EtherealMailProvider",
    new EtherealMailProvider()
);

container.registerSingleton<IUsersProfileRepository>(
  "UsersProfileRepository",
  UsersProfileRepository
);

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
);

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<IColorsRepository>(
    "ColorsRepository",
    ColorsRepository
);

container.registerSingleton<IMaterialsRepository>(
    "MaterialsRepository",
    MaterialsRepository
);

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
);

container.registerSingleton<IProductImagesRepository>(
    "ProductImagesRepository",
    ProductImagesRepository
);

container.registerSingleton<IReviewsRepository>(
    "ReviewsRepository",
    ReviewsRepository
);

container.registerSingleton<IWishlistsRepository>(
    "WishlistsRepository",
    WishlistsRepository
);

container.registerSingleton<ICouponsRepository>(
    "CouponsRepository",
    CouponsRepository
);

container.registerSingleton<IDeliveriesRepository>(
    "DeliveriesRepository",
    DeliveriesRepository
);

container.registerSingleton<IPaymentsRepository>(
    "PaymentsRepository",
    PaymentsRepository
);
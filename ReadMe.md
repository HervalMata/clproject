# CLProject

## **API**

### **TODO** 

#### 1.1 - Users

- [x] 1.1.1 - Create migration CreateUsers 

- [x] 1.1.2 - Create entity users User

- [x] 1.1.3 - create dto ICreateUsersDTO

- [x] 1.1.4 - create interface repository IUsersRepository

- [x] 1.1.5 - create implementation repository UsersRepository

- [x] 1.1.6 - register container typeorm

- [x] 1.1.7 - create service CreateUserService

- [x] 1.1.8 - create controller CreateUserController

- [x] 1.1.9 - create routes users routes

- [x] 1.1.10 - create service GetAllUsersService

- [x] 1.1.11 - create controller GetAllUsersController

- [x] 1.1.12 - create route for get all users

- [x] 1.1.13 - create service GetUserService

- [x] 1.1.14 - create controller GetUserController

- [x] 1.1.15 - create route for get user

- [x] 1.1.16 - create service UpdateAdminUserService

- [x] 1.1.17 - create controller UpdateAdminUserController

- [x] 1.1.18 - create route for update admin user

- [x] 1.1.19 - create service UpdateSellerUserService

- [x] 1.1.20 - create controller UpdateSellerUserController

- [x] 1.1.21 - create route for update seller user

- [x] 1.1.22 - create implementation repository UsersRepositoryInMemory for tests

- [x] 1.1.23 - create service test CreateUserService spec

- [x] 1.1.24 - create service test GetUsersService spec

- [x] 1.1.25 - create service test GetUserService spec

- [x] 1.1.26 - create service test UpdateAdminUserService spec

- [x] 1.1.27 - create service test UpdateSellerUserService spec

- [x] 1.1.28 - create seed Admin.ts

### 1.2 - Authenticate Structure

- [x] 1.2.1 - Create migration CreateUsersTokens

- [x] 1.2.2 - Create entity users UserTokens

- [x] 1.2.3 - create dto ICreateUserTokenDTO

- [x] 1.2.4 - create interface repository IUsersTokensRepository

- [x] 1.2.5 - create implementation repository UsersTokensRepository

- [x] 1.2.6 - create middleware ensureAuthenticate

- [x] 1.2.7 - create middleware ensureAdmin

- [x] 1.2.8 - create middleware ensureAdminOrSeller

- [x] 1.2.9 - create service AuthenticateUserService

- [x] 1.2.10 - create controller AuthenticateUserController

- [x] 1.2.11 - create routes authenticate routes

- [x] 1.2.12 - create service RefreshTokenUserService

- [x] 1.2.13 - create controller RefreshTokenUserController

- [x] 1.2.14 - create route for refresh token

- [x] 1.2.15 - create service ResetPasswordUserService

- [x] 1.2.16 - create controller ResetPasswordController

- [x] 1.2.17 - create route for reset password in password routes

- [x] 1.2.18 - create service SendForgotPasswordUserService

- [x] 1.2.19 - create controller SendForgotPasswordController

- [x] 1.2.20 - create route for send forgot password in password routes

- [x] 1.2.21 - create view ForgotPassword.hbs

- [x] 1.2.22 - create implementation repository UsersTokensInMemory for tests

- [x] 1.2.23 - create service test AuthenticateUserService spec

- [x] 1.2.24 - create service test RefreshTokenUserService spec

- [x] 1.2.25 - create service test ResetPasswordService spec

- [x] 1.2.26 - create service test SendForgotPasswordService spec

### 1.3 - Users Profile

- [x] 1.3.1 - Create migration CreateUsersProfile

- [x] 1.3.2 - Create entity users UsersProfile

- [x] 1.3.3 - create dto ICreateUsersProfileDTO

- [x] 1.3.4 - create interface repository IUsersProfileRepository

- [x] 1.3.5 - create implementation repository UsersProfileRepository

- [x] 1.3.6 - register container typeorm for users profile

- [x] 1.3.7 - create service CreateUsersProfileService

- [x] 1.3.8 - create controller CreateUsersProfileController

- [x] 1.3.9 - create routes users profile routes

- [x] 1.3.10 - create service GetUsersProfileService

- [x] 1.3.11 - create controller GetUsersProfileController

- [x] 1.3.12 - create route for get users profile

- [x] 1.3.13 - create service UpdateUsersProfileService

- [x] 1.3.14 - create controller UpdateUsersProfileController

- [x] 1.3.15 - create route for update users profile

- [x] 1.3.16 - create implementation repository UsersProfileRepositoryInMemory for tests

- [x] 1.1.17 - create service test CreateUsersProfileService spec

- [x] 1.1.18 - create service test GetUsersProfileService spec

- [x] 1.1.19 - create service test UpdateUsersProfileService spec

### 2 - Address

- [x] 2.1.1 - Create migration CreateAddress

- [x] 2.1.2 - Create entity address

- [x] 2.1.3 - create dto ICreateAddressDTO

- [x] 2.1.4 - create interface repository IAddressRepository

- [x] 2.1.5 - create implementation repository AddressRepository

- [x] 2.1.6 - register container typeorm

- [x] 2.1.7 - create service CreateAddressService

- [x] 2.1.8 - create controller CreateAddressController

- [x] 2.1.9 - create routes address routes

- [x] 2.1.10 - create service GetUsersAddressService

- [x] 2.1.11 - create controller GetUsersAddressController

- [x] 2.1.12 - create route for get users address

- [x] 2.1.13 - create service UpdateUsersAddressService

- [x] 2.1.14 - create controller UpdateUsersAddressController

- [x] 2.1.15 - create route for update users address

- [x] 2.3.16 - create implementation repository AddressRepositoryInMemory for tests

- [x] 2.1.17 - create service test CreateAddressService spec

- [x] 2.1.18 - create service test GetUsersAddressService spec

- [x] 2.1.19 - create service test UpdateUsersAddressService spec

### 3 - Category

- [x] 3.1.1 - Create migration CreateCategory

- [x] 3.1.2 - Create entity category

- [x] 3.1.3 - create dto ICreateCategoryDTO

- [x] 3.1.4 - create interface repository ICategoryRepository

- [x] 3.1.5 - create implementation repository CategoryRepository

- [x] 3.1.6 - register container typeorm

- [x] 3.1.7 - create service CreateCategoryService

- [x] 3.1.8 - create controller CreateCategoryController

- [x] 3.1.9 - create routes categories routes

- [x] 3.1.10 - create service GetAllColorsService

- [x] 3.1.11 - create controller GetAllColorsController

- [x] 3.1.12 - create route for get categories

- [x] 3.1.13 - create service GetAvailableCategoriesService

- [x] 3.1.14 - create controller GetAvailableCategoriesController

- [x] 3.1.15 - create route for get available categories

- [x] 3.1.16 - create service GetCategoryService

- [x] 3.1.17 - create controller GetCategoryController

- [x] 3.1.18 - create route for get category

- [x] 3.1.19 - create service UpdateActiveCategoryService

- [x] 3.1.20 - create controller UpdateActiveCategoryController

- [x] 3.1.21 - create route for update active category

- [x] 3.3.22 - create implementation repository CategoryRepositoryInMemory for tests

- [x] 3.1.23 - create service test CreateCategoryService spec

- [x] 3.1.24 - create service test GetAllColorsService spec

- [x] 3.1.25 - create service test GetAvailableCategoriesService spec

- [x] 3.1.26 - create service test GetCategoryService spec

- [x] 3.1.26 - create service test UpdateActiveCategoryService spec

### 4 - Colors

- [x] 4.1.1 - Create migration CreateColor

- [x] 4.1.2 - Create entity color

- [x] 4.1.3 - create dto ICreateColorDTO

- [x] 4.1.4 - create interface repository IColorRepository

- [x] 4.1.5 - create implementation repository ColorRepository

- [x] 4.1.6 - register container typeorm

- [x] 4.1.7 - create service CreateColorService

- [x] 4.1.8 - create controller CreateColorController

- [x] 4.1.9 - create routes colors routes

- [x] 4.1.10 - create service GetAllColorsService

- [x] 4.1.11 - create controller GetAllColorsController

- [x] 4.1.12 - create route for get colors

- [x] 4.1.13 - create service GetColorService

- [x] 4.1.14 - create controller GetColorController

- [x] 4.1.15 - create route for get color

- [x] 4.3.16 - create implementation repository ColorRepositoryInMemory for tests

- [x] 4.1.17 - create service test CreateColorService spec

- [x] 4.1.18 - create service test GetAllColorsService spec

- [x] 4.1.19 - create service test GetColorService spec

### 5 - Materials

- [x] 5.1.1 - Create migration CreateMaterial

- [x] 5.1.2 - Create entity material

- [x] 5.1.3 - create dto ICreateMaterialDTO

- [x] 5.1.4 - create interface repository IMaterialRepository

- [x] 5.1.5 - create implementation repository MaterialRepository

- [x] 5.1.6 - register container typeorm

- [x] 5.1.7 - create service CreateMaterialService

- [x] 5.1.8 - create controller CreateMaterialController

- [x] 5.1.9 - create routes materials routes

- [x] 5.1.10 - create service GetAllMaterialsService

- [x] 5.1.11 - create controller GetAllMaterialsController

- [x] 5.1.12 - create route for get materials

- [x] 5.1.13 - create service GetMaterialService

- [x] 5.1.14 - create controller GetMaterialController

- [x] 5.1.15 - create route for get material

- [x] 5.1.16 - create implementation repository MaterialRepositoryInMemory for tests

- [x] 5.1.17 - create service test CreateMaterialService spec

- [x] 5.1.18 - create service test GetAllMaterialsService spec

- [x] 5.1.19 - create service test GetMaterialService spec

### 6 - Products

- [x] 6.1.1 - Create migration CreateProduct

- [x] 6.1.2 - Create migration CreateColorsProduct

- [x] 6.1.3 - Create migration CreateMaterialsProduct

- [x] 6.1.4 - Create migration CreateProductImages

- [x] 6.1.5 - Create entity product

- [x] 6.1.6 - Create entity product images

- [x] 6.1.7 - create dto ICreateProductDTO

- [x] 6.1.8 - create interface repository IProductRepository

- [x] 6.1.9 - create interface repository IProductImagesRepository

- [x] 6.1.10 - create implementation repository ProductRepository

- [x] 6.1.11 - create implementation repository ProductImagesRepository

- [x] 6.1.12 - register container typeorm

- [x] 6.1.13 - create service CreateProductService

- [x] 6.1.14 - create controller CreateProductController

- [x] 6.1.15 - create routes products routes

- [x] 6.1.16 - create service GetAllProductsService

- [x] 6.1.17 - create controller GetAllProductsController

- [x] 6.1.18 - create route for get products

- [x] 6.1.19 - create service GetProductService

- [x] 6.1.20 - create controller GetProductController

- [x] 6.1.21 - create route for get product

- [x] 6.1.22 - create service GetAvailableProductsService

- [x] 6.1.23 - create controller GetAvailableProductsController

- [x] 6.1.24 - create route for get available products

- [x] 6.1.25 - create service GetProductsByCategoryService

- [x] 6.1.26 - create controller GetProductsByCategoryController

- [x] 6.1.27 - create route for get products by category

- [x] 6.1.28 - create service GetFeaturedProductsService

- [x] 6.1.29 - create controller GetFeaturedProductsController

- [x] 6.1.30 - create route for get products featured

- [x] 6.1.31 - create service GetOfferProductsService

- [x] 6.1.32 - create controller GetOfferProductsController

- [x] 6.1.33 - create route for get products offer

- [x] 6.1.34 - create service CreateColorsProductService

- [x] 6.1.35 - create controller CreateColorsProductController

- [x] 6.1.36 - create routes colors products

- [x] 6.1.37 - create service CreateMaterialsProductService

- [x] 6.1.38 - create controller CreateMaterialsProductController

- [x] 6.1.39 - create routes materials products

- [x] 6.1.40 - create service UpdateProductService

- [x] 6.1.41 - create controller UpdateProductController

- [x] 6.1.42 - create route for update product

- [x] 6.1.43 - create service UpdateAvailableProductService

- [x] 6.1.44 - create controller UpdateAvailableProductController

- [x] 6.1.45 - create route for update available product

- [x] 6.1.46 - create service UpdateOffersProductService

- [x] 6.1.47 - create controller UpdateOffersProductController

- [x] 6.1.48 - create route for update offers product

- [x] 6.1.49 - create service UpdateFeaturedProductService

- [x] 6.1.50 - create controller UpdateFeaturedProductController

- [x] 6.1.51 - create route for update featured product

- [x] 6.1.52 - create service UpdatePriceProductService

- [x] 6.1.53 - create controller UpdatePriceProductController

- [x] 6.1.54 - create route for update price product

- [x] 6.1.55 - create service UpdateStockProductService

- [x] 6.1.56 - create controller UpdateStockProductController

- [x] 6.1.57 - create route for update stock product

- [x] 6.1.58 - create service CreateImagesProductService

- [x] 6.1.59 - create controller CreateImagesProductController

- [x] 6.1.60 - create route for add product images

- [x] 6.1.61 - create implementation repository ProductRepositoryInMemory for tests

- [x] 6.1.62 - create implementation repository ProductImagesRepositoryInMemory for tests

- [x] 6.1.63 - create service test CreateProductService spec

- [x] 6.1.64 - create service test GetAllProductsService spec

- [x] 6.1.65 - create service test GetProductService spec

- [x] 6.1.66 - create service test GetAvailableProductsService spec

- [x] 6.1.67 - create service test GetProductsByCategoryService spec

- [x] 6.1.68 - create service test GetOfferProductsService spec

- [x] 6.1.69 - create service test GetFeaturedProductsService spec

- [x] 6.1.70 - create service test UpdateProductService spec

- [x] 6.1.71 - create service test UpdateAvailableProductsService spec

- [x] 6.1.72 - create service test UpdateOfferProductsService spec

- [x] 6.1.73 - create service test UpdateFeaturedProductsService spec

- [x] 6.1.74 - create service test UpdatePriceProductsService spec

- [x] 6.1.75 - create service test UpdateStockProductsService spec

- [x] 6.1.76 - create service test CreateColorsProductService spec

- [x] 6.1.77 - create service test CreateMaterialsProductService spec

- [x] 6.1.78 - create service test CreateImagesProductService spec

### 7 - Reviews

- [x] 7.1.1 - Create migration CreateReviews

- [x] 7.1.2 - Create entity reviews

- [x] 7.1.3 - create dto ICreateReviewDTO

- [x] 7.1.4 - create interface repository IReviewRepository

- [x] 7.1.5 - create implementation repository ReviewRepository

- [x] 7.1.6 - register container typeorm

- [x] 7.1.7 - create service CreateReviewService

- [x] 7.1.8 - create controller CreateReviewController

- [x] 7.1.9 - create routes reviews routes

- [x] 7.1.10 - create service GetReviewsByUserService

- [x] 7.1.11 - create controller GetReviewsByUserController

- [x] 7.1.12 - create route for get reviews by user

- [x] 7.1.13 - create service GetReviewsByProductService

- [x] 7.1.14 - create controller GetReviewsByProductController

- [x] 7.1.15 - create route for get reviews by product

- [x] 7.1.16 - create service UpdateReviewService

- [x] 7.1.17 - create controller UpdateReviewController

- [x] 7.1.18 - create route for update review

- [x] 7.1.19 - create implementation repository ReviewsRepositoryInMemory for tests

- [x] 7.1.20 - create service test CreateReviewService spec

- [x] 7.1.21 - create service test GetReviewsByUserService spec

- [x] 7.1.22 - create service test GetReviewsByProductService spec

- [x] 7.1.23 - create service test UpdateReviewService spec

### 8 - Wishlists

- [x] 8.1.1 - Create migration CreateWishlists

- [x] 8.1.2 - Create migration CreateProductsWishlists

- [x] 8.1.3 - Create entity wishlists

- [x] 8.1.4 - Create entity relation products wishlists

- [x] 8.1.5 - create dto ICreateWishlistDTO

- [x] 8.1.6 - create interface repository IWishlistRepository

- [x] 8.1.7 - create implementation repository WishlistRepository

- [x] 8.1.8 - register container typeorm

- [x] 8.1.9 - create service CreateWishlistService

- [x] 8.1.10 - create controller CreateWishlistController

- [x] 8.1.11 - create routes wishlists routes

- [x] 8.1.12 - create service GetWishlistsByUserService

- [x] 8.1.13 - create controller GetWishlistsByUserController

- [x] 8.1.14 - create route for get wishlists by user

- [x] 8.1.15 - create implementation repository WishlistsRepositoryInMemory for tests

- [x] 8.1.16 - create service test CreateWishlistService spec

- [x] 8.1.17 - create service test GetWishlistsByUserService spec

### 9 - Coupons

- [x] 9.1.1 - Create migration CreateCoupons

- [x] 9.1.2 - Create entity coupons

- [x] 9.1.3 - create dto ICreateCouponDTO

- [x] 9.1.4 - create interface repository ICouponRepository

- [x] 9.1.5 - create implementation repository CouponRepository

- [x] 9.1.6 - register container typeorm

- [x] 9.1.7 - create service CreateCouponService

- [x] 9.1.8 - create controller CreateCouponController

9.1.9 - create routes coupons routes

9.1.10 - create service GetAllCouponsService

9.1.11 - create controller GetAllCouponsController

9.1.12 - create route for get all coupons

9.1.13 - create service GetCouponService

9.1.14 - create controller GetCouponController

9.1.15 - create route for get a coupon

9.1.16 - create service UpdateCouponService

9.1.17 - create controller UpdateCouponController

9.1.18 - create route for update a coupon

9.1.19 - create implementation repository CouponsRepositoryInMemory for tests

9.1.20 - create service test CreateCouponService spec

9.1.21 - create service test GetAllCouponsService spec

9.1.22 - create service test GetCouponService spec

9.1.23 - create service test UpdateCouponService spec

### 10 - Orders

10.1.1 - Create migration CreateOrders

10.1.2 - Create entity orders

10.1.3 - create dto ICreateOrderDTO

10.1.4 - create interface repository IOrderRepository

10.1.5 - create implementation repository OrderRepository

10.1.6 - register container typeorm

10.1.7 - create service CreateOrderService

10.1.8 - create controller CreateOrderController

10.1.9 - create routes orders routes

10.1.10 - create service GetAllOrdersService

10.1.11 - create controller GetAllOrdersController

10.1.12 - create route for get all orders

10.1.13 - create service GetOrderService

10.1.14 - create controller GetOrderController

10.1.15 - create route for get an order

10.1.16 - create service GetOrdersByUserService

10.1.17 - create controller GetOrdersByUserController

10.1.18 - create route for get orders by user

10.1.19 - create service UpdateOrderService

10.1.20 - create controller UpdateOrderController

10.1.21 - create route for update a order

10.1.22 - create implementation repository OrdersRepositoryInMemory for tests

10.1.23 - create service test CreateOrderService spec

10.1.24 - create service test GetAllOrdersService spec

10.1.25 - create service test GetOrderService spec

10.1.26 - create service test GetOrdersByUserService spec

10.1.27 - create service test UpdateOrderService spec

### 11 - Payments

11.1.1 - Create migration CreatePayments

11.1.2 - Create entity payments

11.1.3 - create dto ICreatePaymentDTO

11.1.4 - create interface repository IPaymentRepository

11.1.5 - create implementation repository PaymentRepository

11.1.6 - register container typeorm

11.1.7 - create service CreatePaymentService

11.1.8 - create controller CreatePaymentController

11.1.9 - create routes payments routes

11.1.10 - create service GetAllPaymentsService

11.1.11 - create controller GetAllPaymentsController

11.1.12 - create route for get all payments

11.1.13 - create service GetPaymentService

11.1.14 - create controller GetPaymentController

11.1.15 - create route for get a payment

11.1.16 - create service GetPaymentsByUserService

11.1.17 - create controller GetPaymentsByUserController

11.1.18 - create route for get payments by user

11.1.19 - create service UpdatePaymentStatusService

11.1.20 - create controller UpdatePaymentStatusController

11.1.21 - create route for update a payment status

11.1.22 - create implementation repository PaymentsRepositoryInMemory for tests

11.1.23 - create service test CreatePaymentService spec

11.1.24 - create service test GetAllPaymentsService spec

11.1.25 - create service test GetPaymentService spec

11.1.26 - create service test GetPaymentsByUserService spec

11.1.27 - create service test UpdatePaymentStatusService spec

### 12 - Deliveries

12.1.1 - Create migration CreateDeliveries

12.1.2 - Create entity deliveries

12.1.3 - create dto ICreateDeliveryDTO

12.1.4 - create interface repository IDeliveryRepository

12.1.5 - create implementation repository DeliveryRepository

12.1.6 - register container typeorm

12.1.7 - create service CreateDeliveryService

12.1.8 - create controller CreateDeliveryController

12.1.9 - create routes deliveries routes

12.1.10 - create service GetAllDeliveriesService

12.1.11 - create controller GetAllDeliveriesController

12.1.12 - create route for get all deliveries

12.1.13 - create service GetDeliveryService

12.1.14 - create controller GetDeliveryController

12.1.15 - create route for get a delivery

12.1.16 - create service GetDeliveriesByUserService

12.1.17 - create controller GetDeliveriesByUserController

12.1.18 - create route for get deliveries by user

12.1.19 - create service UpdateDeliveryStatusService

12.1.20 - create controller UpdateDeliveryStatusController

12.1.21 - create route for update a deliveries status

12.1.22 - create implementation repository DeliveriesRepositoryInMemory for tests

12.1.23 - create service test CreateDeliveryService spec

12.1.24 - create service test GetAllDeliveriesService spec

12.1.25 - create service test GetDeliveryService spec

12.1.26 - create service test GetDeliveriesByUserService spec

12.1.27 - create service test UpdateDeliveryStatusService spec

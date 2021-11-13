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

6.1.4 - Create migration CreateProductImages

6.1.5 - Create entity product

6.1.6 - Create entity product images

6.1.7 - create dto ICreateProductDTO

6.1.8 - create interface repository IProductRepository

6.1.9 - create interface repository IProductImagesRepository

6.1.10 - create implementation repository ProductRepository

6.1.11 - create implementation repository ProductImagesRepository

6.1.12 - register container typeorm

6.1.13 - create service CreateProductService

6.1.14 - create controller CreateProductController

6.1.15 - create routes products routes

6.1.16 - create service GetAllProductsService

6.1.17 - create controller GetAllProductsController

6.1.18 - create route for get products

6.1.19 - create service GetProductService

6.1.20 - create controller GetProductController

6.1.21 - create route for get product

6.1.22 - create service GetAvailableProductsService

6.1.23 - create controller GetAvailableProductsController

6.1.24 - create route for get available products

6.1.25 - create service GetProductsByCategoryService

6.1.26 - create controller GetProductsByCategoryController

6.1.27 - create route for get products by category

6.1.28 - create service CreateColorsProductService

6.1.29 - create controller CreateColorsProductController

6.1.30 - create routes colors products

6.1.31 - create service CreateMaterialsProductService

6.1.32 - create controller CreateMaterialsProductController

6.1.33 - create routes materials products

6.1.34 - create service UpdateProductService

6.1.35 - create controller UpdateProductController

6.1.36 - create route for update product

6.1.37 - create service UpdateAvailableProductService

6.1.38 - create controller UpdateAvailableProductController

6.1.39 - create route for update available product

6.1.40 - create service UpdateOffersProductService

6.1.41 - create controller UpdateOffersProductController

6.1.42 - create route for update offers product

6.1.43 - create service UpdateFeaturedProductService

6.1.44 - create controller UpdateFeaturedProductController

6.1.45 - create route for update featured product

6.1.46 - create implementation repository ProductRepositoryInMemory for tests

6.1.47 - create service test CreateProductService spec

6.1.48 - create service test GetAllProductsService spec

6.1.49 - create service test GetProductService spec

6.1.50 - create service test GetAvailableProductService spec

6.1.51 - create service test GetProductsByCategoryService spec

6.1.52 - create service test UpdateProductService spec

6.1.53 - create service test UpdateAvailableProductService spec

6.1.54 - create service test UpdateOffersProductService spec

6.1.55 - create service test UpdateFeaturedProductService spec

6.1.56 - create service test CreateColorsProductService spec

6.1.57 - create service test CreateMaterialsProductService spec

### 7 - Photo Products

7.1.1 - Create migration CreateProductImages

7.1.2 - Create entity product images

7.1.3 - create interface repository IProductImagesRepository

7.1.4 - create implementation repository ProductImagesRepository

7.1.5 - register container typeorm

7.1.6 - create service UploadProductImagesService

7.1.7 - create controller UploadProductImagesController

7.1.8 - create route for upload product images

7.1.9 - create utils image

7.1.10 - create implementation repository ProductImagesRepositoryInMemory for tests

7.1.11 - create service test UploadProductImagesService spec

### 8 - Reviews

8.1.1 - Create migration CreateReviews

8.1.2 - Create entity reviews

8.1.3 - create dto ICreateReviewDTO

8.1.4 - create interface repository IReviewRepository

8.1.5 - create implementation repository ReviewRepository

8.1.6 - register container typeorm

8.1.7 - create service CreateReviewService

8.1.8 - create controller CreateReviewController

8.1.9 - create routes reviews routes

8.1.10 - create service GetReviewsByUserService

8.1.11 - create controller GetReviewsByUserController

8.1.12 - create route for get reviews by user

8.1.13 - create service GetReviewsByProductService

8.1.14 - create controller GetReviewsByProductController

8.1.15 - create route for get reviews by product

8.1.16 - create service UpdateReviewService

8.1.17 - create controller UpdateReviewController

8.1.18 - create route for update review

8.1.19 - create implementation repository ReviewsRepositoryInMemory for tests

8.1.20 - create service test CreateReviewService spec

8.1.21 - create service test CreateReviewsByUserService spec

8.1.22 - create service test CreateReviewsByProductService spec

8.1.23 - create service test UpdateReviewService spec

### 9 - Wishlists

9.1.1 - Create migration CreateWishlists

9.1.2 - Create entity wishlists

9.1.3 - create dto ICreateWishlistDTO

9.1.4 - create interface repository IWishlistRepository

9.1.5 - create implementation repository WishlistRepository

9.1.6 - register container typeorm

9.1.7 - create service CreateWishlistService

9.1.8 - create controller CreateWishlistController

9.1.9 - create routes wishlists routes

9.1.10 - create service GetWishlistsByUserService

9.1.11 - create controller GetWishlistsByUserController

9.1.12 - create route for get wishlists by user

9.1.13 - create implementation repository WishlistsRepositoryInMemory for tests

9.1.14 - create service test CreateWishlistService spec

9.1.15 - create service test GetWishlistsByUserService spec

### 10 - Coupons

10.1.1 - Create migration CreateCoupons

10.1.2 - Create entity coupons

10.1.3 - create dto ICreateCouponDTO

10.1.4 - create interface repository ICouponRepository

10.1.5 - create implementation repository CouponRepository

10.1.6 - register container typeorm

10.1.7 - create service CreateCouponService

10.1.8 - create controller CreateCouponController

10.1.9 - create routes coupons routes

10.1.10 - create service GetAllCouponsService

10.1.11 - create controller GetAllCouponsController

10.1.12 - create route for get all coupons

10.1.13 - create service GetCouponService

10.1.14 - create controller GetCouponController

10.1.15 - create route for get a coupon

10.1.16 - create service UpdateCouponService

10.1.17 - create controller UpdateCouponController

10.1.18 - create route for update a coupon

10.1.19 - create implementation repository CouponsRepositoryInMemory for tests

10.1.20 - create service test CreateCouponService spec

10.1.21 - create service test GetAllCouponsService spec

10.1.22 - create service test GetCouponService spec

10.1.23 - create service test UpdateCouponService spec

### 11 - Orders

11.1.1 - Create migration CreateOrders

11.1.2 - Create entity orders

11.1.3 - create dto ICreateOrderDTO

11.1.4 - create interface repository IOrderRepository

11.1.5 - create implementation repository OrderRepository

11.1.6 - register container typeorm

11.1.7 - create service CreateOrderService

11.1.8 - create controller CreateOrderController

11.1.9 - create routes orders routes

11.1.10 - create service GetAllOrdersService

11.1.11 - create controller GetAllOrdersController

11.1.12 - create route for get all orders

11.1.13 - create service GetOrderService

11.1.14 - create controller GetOrderController

11.1.15 - create route for get an order

11.1.16 - create service GetOrdersByUserService

11.1.17 - create controller GetOrdersByUserController

11.1.18 - create route for get orders by user

11.1.19 - create service UpdateOrderService

11.1.20 - create controller UpdateOrderController

11.1.21 - create route for update a order

11.1.22 - create implementation repository OrdersRepositoryInMemory for tests

11.1.23 - create service test CreateOrderService spec

11.1.24 - create service test GetAllOrdersService spec

11.1.25 - create service test GetOrderService spec

11.1.26 - create service test GetOrdersByUserService spec

11.1.27 - create service test UpdateOrderService spec

### 12 - Payments

12.1.1 - Create migration CreatePayments

12.1.2 - Create entity payments

12.1.3 - create dto ICreatePaymentDTO

12.1.4 - create interface repository IPaymentRepository

12.1.5 - create implementation repository PaymentRepository

12.1.6 - register container typeorm

12.1.7 - create service CreatePaymentService

12.1.8 - create controller CreatePaymentController

12.1.9 - create routes payments routes

12.1.10 - create service GetAllPaymentsService

12.1.11 - create controller GetAllPaymentsController

12.1.12 - create route for get all payments

12.1.13 - create service GetPaymentService

12.1.14 - create controller GetPaymentController

12.1.15 - create route for get a payment

12.1.16 - create service GetPaymentsByUserService

12.1.17 - create controller GetPaymentsByUserController

12.1.18 - create route for get payments by user

12.1.19 - create service UpdatePaymentStatusService

12.1.20 - create controller UpdatePaymentStatusController

12.1.21 - create route for update a payment status

12.1.22 - create implementation repository PaymentsRepositoryInMemory for tests

12.1.23 - create service test CreatePaymentService spec

12.1.24 - create service test GetAllPaymentsService spec

12.1.25 - create service test GetPaymentService spec

12.1.26 - create service test GetPaymentsByUserService spec

12.1.27 - create service test UpdatePaymentStatusService spec

### 13 - Deliveries

13.1.1 - Create migration CreateDeliveries

13.1.2 - Create entity deliveries

13.1.3 - create dto ICreateDeliveryDTO

13.1.4 - create interface repository IDeliveryRepository

13.1.5 - create implementation repository DeliveryRepository

13.1.6 - register container typeorm

13.1.7 - create service CreateDeliveryService

13.1.8 - create controller CreateDeliveryController

13.1.9 - create routes deliveries routes

13.1.10 - create service GetAllDeliveriesService

13.1.11 - create controller GetAllDeliveriesController

13.1.12 - create route for get all deliveries

13.1.13 - create service GetDeliveryService

13.1.14 - create controller GetDeliveryController

13.1.15 - create route for get a delivery

13.1.16 - create service GetDeliveriesByUserService

13.1.17 - create controller GetDeliveriesByUserController

13.1.18 - create route for get deliveries by user

13.1.19 - create service UpdateDeliveryStatusService

13.1.20 - create controller UpdateDeliveryStatusController

13.1.21 - create route for update a deliveries status

13.1.22 - create implementation repository DeliveriesRepositoryInMemory for tests

13.1.23 - create service test CreateDeliveryService spec

13.1.24 - create service test GetAllDeliveriesService spec

13.1.25 - create service test GetDeliveryService spec

13.1.26 - create service test GetDeliveriesByUserService spec

13.1.27 - create service test UpdateDeliveryStatusService spec

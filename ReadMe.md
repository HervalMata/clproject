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

1.2.23 - create service test AuthenticateUserService spec

1.2.24 - create service test RefreshTokenUserService spec

1.2.25 - create service test ResetPasswordService spec

1.2.26 - create service test SendForgotPasswordService spec

### 1.3 - Users Profile

1.3.1 - Create migration CreateUsersProfile

1.3.2 - Create entity users UsersProfile

1.3.3 - create dto ICreateUsersProfileDTO

1.3.4 - create interface repository IUsersProfileRepository

1.3.5 - create implementation repository UsersProfileRepository

1.3.6 - register container typeorm for users profile

1.3.7 - create service CreateUsersProfileService

1.3.8 - create controller CreateUsersProfileController

1.3.9 - create routes users profile routes

1.3.10 - create service GetUsersProfileService

1.3.11 - create controller GetUsersProfileController

1.3.12 - create route for get users profile

1.3.13 - create service UpdateUsersProfileService

1.3.14 - create controller UpdateUsersProfileController

1.3.15 - create route for update users profile

1.3.16 - create implementation repository UsersProfileRepositoryInMemory for tests

1.1.17 - create service test CreateUsersProfileService spec

1.1.18 - create service test GetUsersProfileService spec

1.1.19 - create service test UpdateUsersProfileService spec

### 2 - Address

2.1.1 - Create migration CreateAddress

2.1.2 - Create entity address

2.1.3 - create dto ICreateAddressDTO

2.1.4 - create interface repository IAddressRepository

2.1.5 - create implementation repository AddressRepository

2.1.6 - register container typeorm

2.1.7 - create service CreateAddressService

2.1.8 - create controller CreateAddressController

2.1.9 - create routes address routes

2.1.10 - create service GetUsersAddressService

2.1.11 - create controller GetUsersAddressController

2.1.12 - create route for get users address

2.1.13 - create service UpdateUsersAddressService

2.1.14 - create controller UpdateUsersAddressController

2.1.15 - create route for update users address

2.3.16 - create implementation repository AddressRepositoryInMemory for tests

2.1.17 - create service test CreateAddressService spec

2.1.18 - create service test GetUsersAddressService spec

2.1.19 - create service test UpdateUsersAddressService spec

### 3 - Category

3.1.1 - Create migration CreateCategory

3.1.2 - Create entity category

3.1.3 - create dto ICreateCategoryDTO

3.1.4 - create interface repository ICategoryRepository

3.1.5 - create implementation repository CategoryRepository

3.1.6 - register container typeorm

3.1.7 - create service CreateCategoryService

3.1.8 - create controller CreateCategoryController

3.1.9 - create routes categories routes

3.1.10 - create service GetAllCategoriesService

3.1.11 - create controller GetAllCategoriesController

3.1.12 - create route for get categories

3.1.13 - create service GetCategoryService

3.1.14 - create controller GetCategoryController

3.1.15 - create route for get category

3.1.16 - create service UpdateActiveCategoryService

3.1.17 - create controller UpdateActiveCategoryController

3.1.18 - create route for update active category

3.3.19 - create implementation repository CategoryRepositoryInMemory for tests

3.1.20 - create service test CreateCategoryService spec

3.1.21 - create service test GetAllCategoriesService spec

3.1.22 - create service test GetCategoryService spec

3.1.23 - create service test UpdateActiveCategoryService spec

### 4 - Colors

4.1.1 - Create migration CreateColor

4.1.2 - Create entity color

4.1.3 - create dto ICreateColorDTO

4.1.4 - create interface repository IColorRepository

4.1.5 - create implementation repository ColorRepository

4.1.6 - register container typeorm

4.1.7 - create service CreateColorService

4.1.8 - create controller CreateColorController

4.1.9 - create routes colors routes

4.1.10 - create service GetAllColorsService

4.1.11 - create controller GetAllColorsController

4.1.12 - create route for get colors

4.1.13 - create service GetColorService

4.1.14 - create controller GetColorController

4.1.15 - create route for get color

4.3.16 - create implementation repository ColorRepositoryInMemory for tests

4.1.17 - create service test CreateColorService spec

4.1.18 - create service test GetAllColorsService spec

4.1.19 - create service test GetColorService spec

### 5 - Materials

5.1.1 - Create migration CreateMaterial

5.1.2 - Create entity material

5.1.3 - create dto ICreateMaterialDTO

5.1.4 - create interface repository IMaterialRepository

5.1.5 - create implementation repository MaterialRepository

5.1.6 - register container typeorm

5.1.7 - create service CreateMaterialService

5.1.8 - create controller CreateMaterialController

5.1.9 - create routes materials routes

5.1.10 - create service GetAllMaterialsService

5.1.11 - create controller GetAllMaterialsController

5.1.12 - create route for get materials

5.1.13 - create service GetMaterialService

5.1.14 - create controller GetMaterialController

5.1.15 - create route for get material

5.1.16 - create implementation repository MaterialRepositoryInMemory for tests

5.1.17 - create service test CreateMaterialService spec

5.1.18 - create service test GetAllMaterialsService spec

5.1.19 - create service test GetMaterialService spec

### 6 - Products

6.1.1 - Create migration CreateProduct

6.1.2 - Create entity product

6.1.3 - create dto ICreateProductDTO

6.1.4 - create interface repository IProductRepository

6.1.5 - create implementation repository ProductRepository

6.1.6 - register container typeorm

6.1.7 - create service CreateProductService

6.1.8 - create controller CreateProductController

6.1.9 - create routes products routes

6.1.10 - create service GetAllProductsService

6.1.11 - create controller GetAllProductsController

6.1.12 - create route for get products

6.1.13 - create service GetProductService

6.1.14 - create controller GetProductController

6.1.15 - create route for get product

6.1.16 - create service GetAvailableProductsService

6.1.17 - create controller GetAvailableProductsController

6.1.18 - create route for get available products

6.1.19 - create service GetProductsByCategoryService

6.1.20 - create controller GetProductsByCategoryController

6.1.21 - create route for get products by category

6.1.22 - create service CreateColorsProductService

6.1.23 - create controller CreateColorsProductController

6.1.24 - create routes colors products

6.1.22 - create service CreateMaterialsProductService

6.1.23 - create controller CreateMaterialsProductController

6.1.24 - create routes materials products

6.1.25 - create service UpdateProductService

6.1.26 - create controller UpdateProductController

6.1.27 - create route for update product

6.1.25 - create service UpdateAvailableProductService

6.1.26 - create controller UpdateAvailableProductController

6.1.27 - create route for update available product

6.1.28 - create service UpdateOffersProductService

6.1.29 - create controller UpdateOffersProductController

6.1.30 - create route for update offers product

6.1.31 - create service UpdateFeaturedProductService

6.1.32 - create controller UpdateFeaturedProductController

6.1.33 - create route for update featured product

6.1.34 - create implementation repository ProductRepositoryInMemory for tests

6.1.35 - create service test CreateProductService spec

6.1.36 - create service test GetAllProductsService spec

6.1.37 - create service test GetProductService spec

6.1.38 - create service test GetAvailableProductService spec

6.1.39 - create service test GetProductsByCategoryService spec

6.1.40 - create service test UpdateProductService spec

6.1.41 - create service test UpdateAvailableProductService spec

6.1.41 - create service test UpdateOffersProductService spec

6.1.42 - create service test UpdateFeaturedProductService spec

6.1.43 - create service test CreateColorsProductService spec

6.1.44 - create service test CreateMaterialsProductService spec

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

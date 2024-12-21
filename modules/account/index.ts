// import { Router } from "express";
// import {
//   IS_ADMIN,
//   IS_BASIC,
//   IS_LOGGEDIN,
//   USER_MUST_BE,
// } from "../../middlewares/auth.middlewares";
// import ONBOARD_USER from "./controllers/onboard.controller";
// import GET_DATA from "./controllers/getData.controller";
// import multer, { diskStorage } from "multer";
// import { filterImageFile } from "../../utils/functions";
// import CREATE_USER_IMAGE from "./controllers/create_image.controller";
// import MediaService from "../../services/media";
// import DELETE_USER_IMAGE from "./controllers/delete_profile_image.controller";
// import DELETE_USER from "./controllers/delete.controller";
// import ValidationMiddleware from "../../validations/validation.middleware";
// import AccountValidation from "../../validations/account.validation";
// import AppConstants from "../../constants/app.constants";
// import FETCH_BULK_BOOKMARKED_POSTS from "./controllers/fetch_bookmarked_posts";
// import PostValidation from "../../validations/post.validation";
// import FETCH_USER_NOTIFICATIONS from "./controllers/fetch_notifications.controller";
// import ONBOARD_ADMIN from "./controllers/onboard_admin.controller";
// import UPDATE_USER from "./controllers/update_user.controller";
// import FETCH_BULK_USERS from "./controllers/fetch_bulk.controller";

// const router = Router();

// // get the user account details
// router.get("/", IS_LOGGEDIN, IS_BASIC, GET_DATA);

// router.delete("/", IS_LOGGEDIN, IS_BASIC, DELETE_USER);

// router.get(
//   "/bulk",
//   IS_LOGGEDIN,
//   USER_MUST_BE([AppConstants.ROLES.admin, AppConstants.ROLES.super_admin]),
//   FETCH_BULK_USERS
// );

// router.patch(
//   "/",
//   IS_LOGGEDIN,
//   IS_BASIC,
//   ValidationMiddleware(AccountValidation.updateUser),
//   UPDATE_USER
// );

// // create profile image
// router.post(
//   "/image",
//   IS_LOGGEDIN,
//   IS_BASIC,
//   multer({
//     storage: diskStorage({
//       destination: "uploads/",
//     }),
//     fileFilter(req, file, cb) {
//       return filterImageFile(req, file, cb);
//     },
//   }).single("image"),
//   MediaService.handleMedia,
//   CREATE_USER_IMAGE
// );

// router.delete(
//   "/image",
//   IS_LOGGEDIN,
//   IS_BASIC,
//   ValidationMiddleware(
//     AccountValidation.deleteProfileImage,
//     AppConstants.REQUEST_TYPE.BODY
//   ),
//   DELETE_USER_IMAGE
// );

// router.get(
//   "/bookmarked-posts",
//   IS_LOGGEDIN,
//   IS_BASIC,
//   ValidationMiddleware(
//     PostValidation.fetchBulk,
//     AppConstants.REQUEST_TYPE.QUERY
//   ),
//   FETCH_BULK_BOOKMARKED_POSTS
// );

// /* onboard the user */
// router.post("/onboard", IS_LOGGEDIN, IS_BASIC, ONBOARD_USER);

// router.post(
//   "/admin/onboard",
//   IS_LOGGEDIN,
//   IS_ADMIN,
//   multer({
//     storage: diskStorage({
//       destination: "uploads/",
//     }),
//     fileFilter(req, file, cb) {
//       return filterImageFile(req, file, cb);
//     },
//   }).single("image"),
//   MediaService.handleMedia,
//   ONBOARD_ADMIN
// );

// router.get("/notification", IS_LOGGEDIN, IS_BASIC, FETCH_USER_NOTIFICATIONS);

// export default router;

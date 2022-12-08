const express=require('express')
const authController=require('../controllers/authController')
const viewController=require('../controllers/viewController')
const Router=express.Router()
Router.use(authController.isLoggedIn)
Router.get("/",viewController.home)
Router.get('/login',viewController.login)
Router.get('/signup',viewController.signup)
Router.get("/projects",viewController.project)
Router.get('/forgotpasswordpage',viewController.forgotpassword)
Router.get('/resetpassword/:token',viewController.passwordPage)
Router.get('/android-roadmap',viewController.android)
Router.get('/frontend-roadmap',viewController.frontend)
Router.get('/fullstack-roadmap',viewController.fullstack)
Router.get("/backend-roadmap",viewController.backend)
Router.get('/events',viewController.events)
Router.get("/aptitude",viewController.aptitude)
Router.get('/profile',viewController.profile)
Router.get("/working",viewController.working)
module.exports=Router;
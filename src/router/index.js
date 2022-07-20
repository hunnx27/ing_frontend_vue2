import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import HomeView2 from "../views/home/HomeView2.vue";
import ReviewView from "../views/review/ReviewView.vue";
import LoginView from "../views/login/LoginView.vue";
import SignupView from "../views/signup/SignupView.vue";
import MenuLayout from "../layouts/MenuLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import TempLayout from "../layouts/TempLayout.vue";
import OauthRedirect from "@/components/login/oauth/RedirectItem";

// Menu
// Menu.Mypage
import MypageMenuView from "../views/menu/mypage/MypageMenuView.vue"
import MyinfoView from "../views/menu/mypage/MyinfoView.vue"
import PointHistoryView from "../views/menu/mypage/PointHistoryView.vue"
// Menu.AccountManageView
import AccountManageView from "../views/menu/AccountManageView.vue"

// Counsel
import CounselReg1View from "../views/counsel/CounselReg1View.vue"
import CounselReg2View from "../views/counsel/CounselReg2View.vue"
import CounselReg3View from "../views/counsel/CounselReg3View.vue"
import CounselDetailView from "../views/menu/temp/CounselDetailView.vue"

// Review.company
import CompanyReg1View from "../views/review/company/CompanyReg1View.vue"
import CompanyReg2View from "../views/review/company/CompanyReg2View.vue"
import CompanyReg3View from "../views/review/company/CompanyReg3View.vue"
import CompanyReg4View from "../views/review/company/CompanyReg4View.vue"

// Review.interview
import InterviewReg1View from "../views/review/interview/InterviewReg1View.vue"
import InterviewReg2View from "../views/review/interview/InterviewReg2View.vue"
import InterviewReg3View from "../views/review/interview/InterviewReg3View.vue"

// Review.yearamt
import YearamtReg1View from "../views/review/yearamt/YearamtReg1View.vue"
import YearamtReg2View from "../views/review/yearamt/YearamtReg2View.vue"
import YearamtReg3View from "../views/review/yearamt/YearamtReg3View.vue"

// sample loginnpm
import Main from "@/components/loginExample/MainItem";
import IndexPage from "@/components/loginExample/IndexItem";
import SampleOauthRedirect from "@/components/loginExample/oauth/RedirectItem";

// test
import Test1View from "@/views/sample/Test1View.vue";

// Sample
import ImageUploadView from "../views/sample/ImageUploadView.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MenuLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/review",
    component: MenuLayout,
    children: [
      {
        path: "",
        name: "review",
        component: ReviewView,
      },
    ],
  },
  {
    path: "/login",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "login",
        component: LoginView,
      },
    ],
  },
  {
    path: "/login/oauth2/redirect",
    name: "OauthRedrect",
    component: OauthRedirect,
  },
  {
    path: "/signup",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "signup",
        component: SignupView,
      },
    ],
  },

  /**
   * Menu.mypage
   */
   {
    path: "/menu/mypage",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "mypageMenuView",
        component: MypageMenuView,
      },
    ],
  },
  {
    path: "/menu/mypage/myinfo",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "myinfoView",
        component: MyinfoView,
      },
    ],
  },
  {
    path: "/menu/mypage/pointHistory",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "pointHistoryView",
        component: PointHistoryView,
      },
    ],
  },
  /**
   * Menu.accountManageView
   */
  {
    path: "/menu/accountManage",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "accountManageView",
        component: AccountManageView,
      },
    ],
  },
  /**
   * Counsel
   */
   {
    path: "/counsel/counselReg1",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "CounselReg1View",
        component: CounselReg1View,
      },
    ],
  },
  {
    path: "/counsel/counselReg2",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "CounselReg2View",
        component: CounselReg2View,
      },
    ],
  },
  {
    path: "/counsel/counselReg3",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "CounselReg3View",
        component: CounselReg3View,
      },
    ],
  },
  {
    path: "/menu/temp/counselDetail",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "CounselDetail",
        component: CounselDetailView,
      },
    ],
  },  

  /**
   * Review.Company
   */
  {
    path: "/review/company/companyReg1",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "CompanyReg1View",
        component: CompanyReg1View,
      },
    ],
  },
  {
    path: "/review/company/companyReg2",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "CompanyReg2View",
        component: CompanyReg2View,
      },
    ],
  },
  {
    path: "/review/company/companyReg3",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "CompanyReg3View",
        component: CompanyReg3View,
      },
    ],
  },
  {
    path: "/review/company/companyReg4",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "CompanyReg4View",
        component: CompanyReg4View,
      },
    ],
  },

  /**
   * Review.Interview
   */
  {
    path: "/review/interview/interviewReg1",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "InterviewReg1View",
        component: InterviewReg1View,
      },
    ],
  },
  {
    path: "/review/interview/interviewReg2",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "InterviewReg2View",
        component: InterviewReg2View,
      },
    ],
  },
  {
    path: "/review/interview/interviewReg3",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "InterviewReg3View",
        component: InterviewReg3View,
      },
    ],
  },
  

  /**
   * Review.Yearamt
   */
  {
    path: "/review/yearamt/yearamtReg1",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "YearamtReg1View",
        component: YearamtReg1View,
      },
    ],
  },
  {
    path: "/review/yearamt/yearamtReg2",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "YearamtReg2View",
        component: YearamtReg2View,
      },
    ],
  },
  {
    path: "/review/yearamt/yearamtReg3",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "YearamtReg3View",
        component: YearamtReg3View,
      },
    ],
  },
  


  /**
   * 
   * 샘플 소스
   * 
   */
  {
    path: "/home2",
    component: MenuLayout,
    children: [
      {
        path: "",
        name: "home2",
        component: HomeView2,
      },
    ],
  },
  {
    path: "/about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MenuLayout,
    children: [
      {
        path: "",
        name: "about",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/about/AboutView.vue"
          ),
      },
    ],
  },
  {
    path: "/about2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "about2",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/about/About2View.vue"
          ),
      },
    ],
  },
  {
    path: "/sample/ImageUpload",
    component: TempLayout,
    children: [
      {
        path: "",
        name: "ImageUpload",
        component: ImageUploadView,
      },
    ],
  },
  
  // {
  //   path: '/loginSample',
  //   component: IndexPage,
  //   children: [
  //     {
  //       path: '',
  //       name: 'Main',
  //       component: Main
  //     },
  //     {
  //       path: '/oauth/redirect',
  //       name: 'OauthRedrect',
  //       component: SampleOauthRedirect
  //     }
  //   ]
  // },
  {
    path: "/test1",
    component: Test1View,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

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
import MypageView from "../views/menu/mypage/MypageView.vue"
import MyinfoView from "../views/menu/mypage/MyinfoView.vue"
import PointHistoryView from "../views/mypage/PointHistoryView.vue"
// Menu.AccountManageView
import AccountManageView from "../views/menu/AccountManageView.vue"

// sample loginnpm
import Main from "@/components/loginExample/MainItem";
import IndexPage from "@/components/loginExample/IndexItem";
import SampleOauthRedirect from "@/components/loginExample/oauth/RedirectItem";

// test
import Test1View from "@/views/sample/Test1View.vue";

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
        name: "mypageView",
        component: MypageView,
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

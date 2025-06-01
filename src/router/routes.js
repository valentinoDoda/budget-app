import HeroPage from "../pages/HeroPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignUpPage from "../pages/SignUpPage.vue";
import UserPage from "../pages/UserPage.vue";
import UserHome from "../UserOptions/UserHome.vue";
import UserMoves from "../UserOptions/UserMoves.vue";
import UserStats from "../UserOptions/UserStatisticks.vue";
import UserAdd from "../UserOptions/UserAdd.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import MoveDetails from "../components/MoveDetails.vue";
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Hero", component: HeroPage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/sign", name: "Sign", component: SignUpPage },
  { path: "/register", name: "Register", component: RegisterPage },

  {
    path: "/user",
    redirect: { name: "UserHome" },
    name: "User",
    component: UserPage,
    children: [
      { path: "home", name: "UserHome", component: UserHome },
      { path: "edit", name: "UserEdit", component: MoveDetails },
      { path: "moves", name: "UserMoves", component: UserMoves },
      { path: "stats", name: "UserStats", component: UserStats },
    ],
  },
  { path: "/user/add", name: "UserAdd", component: UserAdd },
  { path: "/user/moves/:detail", name: "MoveDetail", component: MoveDetails },
  { path: "/:notFound(.*)", redirect: { name: "Hero" } },
];

export default routes;

import { createWebHistory, createRouter } from "vue-router";

import CreateStudyGroup from "@/views/CreateStudyGroup";
import SconeHome from "@/views/SconeHome";
import MyPage from "@/views/MyPage";
import ManageStudyGroup from "@/views/ManageStudyGroup";

const routes = [
    {
        path: "/group/create",
        name: "스터디 그룹 생성",
        component: CreateStudyGroup
    },
    {
        path: "/group/study",
        name: "스터디 그룹 관리",
        component: ManageStudyGroup
    },
    {
        path: "/my-page",
        name: "회원 정보",
        component: MyPage
    },
    {
        path: "/",
        name: "Scone",
        component: SconeHome
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

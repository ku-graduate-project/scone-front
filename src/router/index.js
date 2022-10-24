import { createWebHistory, createRouter } from "vue-router";

import CreateStudyGroup from "@/views/CreateStudyGroup";
import UpdateStudyGroup from "@/views/UpdateStudyGroup";
import SconeNotFound from "@/components/layout/SconeNotFound";
import SconeHome from "@/views/SconeHome";
import MyPage from "@/views/MyPage";
import ManageStudyGroup from "@/views/ManageStudyGroup";

const routes = [
    {
        path: "/group",
        name: "스터디 그룹 생성",
        component: SconeNotFound,
        children:[
            {
                path:'create',
                component: CreateStudyGroup
            },
            {
                path:'study',
                component: ManageStudyGroup
            },
            {
                path:'update',
                component: UpdateStudyGroup
            },
        ],
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

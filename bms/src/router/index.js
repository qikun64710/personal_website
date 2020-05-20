// import MainContent from '../component/main-content/main-content.vue';


// 初始化加载的模块
import Home from '../components/home/home.vue';
import MainContent from '../components/main-content/main-content.vue';
import EventCreate from '../components/event/create.vue';
import Notfound from '../components/notfound/notfound.vue';
import EventList from '../components/event/list.vue';
import Recharge from '../components/user/recharge.vue';
import Account from '../components/user/account.vue';

var routes = [{
    path: '/',
    component: MainContent,
    meta: {
        name: '首页'
    },
    children: [{
        path: '', // 默认路由
        component: Home
    }]
}, {
    path: '/event',
    component: MainContent,
    meta: {
        name: '活动'
    },
    children: [{
        path: '', // 默认路径
        redirect: 'create',
        meta: {
            hidden: true // 隐藏的路由不会在路由菜单中显示出来
        }
    }, {
        path: 'create',
        component: EventCreate,
        meta: {
            name: '创建'
        }
    }, {
        path: 'list',
        component: EventList,
        meta: {
            name: '管理'
        }
    }]
}, {
    path: '/user',
    component: MainContent,
    meta: {
        name: '账户'
    },
    children: [{
        path: '',
        redirect: 'recharge',
        meta: {
            hidden: true
        }
    }, {
        path: 'recharge',
        component: Recharge,
        meta: {
            name: '账户充值'
        }
    }, {
        path: 'account',
        component: Account,
        meta: {
            name: '账户信息'
        }
    }]
}];

// 在最后添加处理 404 路由
routes.push({
    path: '*', // 匹配未找到路由的情况, 类似 404 页面
    component: Notfound,
    meta: {
        hidden: true
    }
});

export default routes;
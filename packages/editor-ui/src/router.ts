import Vue from 'vue';
import Router from 'vue-router';
import MainHeader from '@/components/MainHeader/MainHeader.vue';
import MainSidebar from '@/components/MainSidebar.vue';
import AppMain from '@/components/AppMain.vue';
import AppMainIndex from '@/components/AppMainIndex.vue';


import NodeView from '@/views/NodeView.vue';
import ExecutionsList from '@/components/ExecutionsList.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	// @ts-ignore
	base: window.BASE_PATH === '/%BASE_PATH%/' ? '/' : window.BASE_PATH,
	routes: [
		{
			path: '/execution/:id',
			name: 'ExecutionById',
			components: {
				default: NodeView,
				header: MainHeader,
				sidebar: MainSidebar,
			},
		},
		{
			path: '/oauth2/callback',
			name: 'oAuth2Callback',
			components: {
			},
		},
		{
			path: '/workflow',
			name: 'NodeViewNew',
			components: {
				default: NodeView,
				header: MainHeader,
				sidebar: MainSidebar,
			},
		},
		{
			path: '/index',
			name: 'index',
			components: {
				default: AppMainIndex,
				header: MainHeader,
				sidebar: MainSidebar,
			},
		},
		{
			path: '/workflow/:name',
			name: 'NodeViewExisting',
			components: {
				default: NodeView,
				header: MainHeader,
			//	sidebar: MainSidebar,
			},
		},
		{
			path: '/',
			redirect: '/index',
		},
		{
			path: '/workflows/templates/:id',
			name: 'WorkflowTemplate',
			components: {
				default: NodeView,
				header: MainHeader,
				sidebar: MainSidebar,
			},
		},
		{
			path: '/executions',
			name: 'executions',
			components: {
				default: AppMain,
				header: MainHeader,
				sidebar: MainSidebar,
			},
			/*
			children: [
				{
				  path: '/executions/list',
				  name:'executionsList',
				  component: ExecutionsList
				},
				
			  ]
			  */
		},
	],
});

<template>
	<div id="app">

		
		<div id="header">
			<router-view name="header"></router-view>
		</div>
		
		<div id="sidebar">
			<router-view name="sidebar"></router-view>
		</div>
		
		<div id="content">
			<router-view />
		</div>
	</div>
</template>

import WorkflowOpen from "@/components/WorkflowOpen.vue";

<script lang="ts">
export default {
	name: 'App',
};
</script>

<style lang="scss">

#app {
	padding: 0;
	margin: 0 auto;
}

#content {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#header {
	z-index: 10;
	position: fixed;
	width: 100%;
}

#sidebar {
	z-index: 15;
	position: fixed;
}

</style>

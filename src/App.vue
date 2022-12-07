<script setup lang="ts">
</script>

<template>
    <div id="title">
	    <span id="title-content">What to eat?</span>
	    <nut-icon size="40" id="title-icon"  name="src/assets/icons/food_shaved_ice_01.png"></nut-icon>
    </div>
	<RouterView></RouterView>
</template>

<style scoped lang="less">
#title {
	width: fit-content;

	margin:0 auto;
	height: 10vh;

	display:flex;
	flex-direction:row;
	align-items: center;

	#title-content{
		text-align: center;
		font-size: 40px;

    }

    #title-icon {

    }
}
</style>

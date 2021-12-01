<template>
	<div>
		<h1>Hello Example</h1>
		<header-example></header-example>
		<example-component></example-component>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderExample from '..//HeaderExample.vue'
import ExampleComponent from '../ExampleComponent.vue'

export default defineComponent({
	components: { HeaderExample, ExampleComponent },
	setup() {},
})
</script>

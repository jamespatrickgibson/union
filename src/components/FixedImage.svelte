<script>
	export let src;
	export let alt;
	export let size = "4";
	export let radius = "0";
</script>

<style lang="scss">
	@use "../scss/utils/all" as *;

	.un-fixed-image {
		overflow: hidden;

		// Sizes
		@each $size, $space in $size-fixed-scale {
			&.is-size-#{$size} {
				max-width: $space;
				max-height: $space;
			}
		}

		// Radii
		@each $scale, $radius in $radii {
			&.has-radius-#{$scale} {
				border-radius: $radius;
			}
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			max-width: 100%;
			display: inline-block;
		}
	}
</style>

<figure
	class="un-fixed-image"
	class:is-size-1="{size === '1'}"
	class:is-size-2="{size === '2'}"
	class:is-size-3="{size === '3'}"
	class:is-size-4="{size === '4'}"
	class:is-size-5="{size === '5'}"
	class:is-size-6="{size === '6'}"
	class:is-size-7="{size === '7'}"
	class:is-size-8="{size === '8'}"
	class:has-radius-1="{radius === '1'}"
	class:has-radius-2="{radius === '2'}"
	class:has-radius-3="{radius === '3'}"
	class:has-radius-4="{radius === '4'}"
>
	<img src="{src}" alt="{alt}" />
</figure>

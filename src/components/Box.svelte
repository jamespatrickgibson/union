<script>
	export let space = "3";
	export let mode = "";
	export let radius = "0";
	export let shadow = "0";
</script>

<style lang="scss">
	@use "../scss/utils/all" as *;

	.box {
		// Spacing
		@each $size, $space in $spacers {
			&.has-space-#{$size} {
				padding: $space;
			}
		}

		// Radii
		@each $scale, $radius in $radii {
			&.has-radius-#{$scale} {
				border-radius: $radius;
			}
		}

		// Shadow
		@each $scale, $shadow in $shadows {
			&.has-shadow-#{$scale} {
				box-shadow: $shadow;
			}
		}

		// Modes
		&.is-mode-white {
			@include mode(white);
		}
		&.is-mode-light {
			@include mode(light);
		}
		&.is-mode-dark {
			@include mode(dark);
		}
		&.is-mode-black {
			@include mode(black);
		}
	}
</style>

<div
	class="box"
	class:has-space-1="{space === '1'}"
	class:has-space-2="{space === '2'}"
	class:has-space-3="{space === '3'}"
	class:has-space-4="{space === '4'}"
	class:has-space-5="{space === '5'}"
	class:has-space-6="{space === '6'}"
	class:has-space-7="{space === '7'}"
	class:has-space-8="{space === '8'}"
	class:is-mode-white="{mode === 'white'}"
	class:is-mode-light="{mode === 'light'}"
	class:is-mode-dark="{mode === 'dark'}"
	class:is-mode-black="{mode === 'black'}"
	class:has-radius-1="{radius === '1'}"
	class:has-radius-2="{radius === '2'}"
	class:has-radius-3="{radius === '3'}"
	class:has-radius-4="{radius === '4'}"
	class:has-shadow-1="{shadow === '1'}"
	class:has-shadow-2="{shadow === '2'}"
	class:has-shadow-3="{shadow === '3'}"
	class:has-shadow-4="{shadow === '4'}"
>
	<slot />
</div>

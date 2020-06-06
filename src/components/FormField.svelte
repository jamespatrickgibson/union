<style lang="scss">
	@use "../scss/forms/_forms" as *;
</style>

<div class="un-field">
	<slot name="label" />
	<div class="un-control">
		<slot name="input" />
		<!-- <input
			formControlName="vendor"
			class="un-input"
			type="text"
			placeholder="Ex. Trader Joe's"
			value=""
			[class.input-error]="vendor.invalid && (vendor.touched || vendor.dirty)"
		/> -->
	</div>
</div>

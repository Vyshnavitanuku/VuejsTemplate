<template>
    <div>
	<div class="container">
		<button type="button" class="btn btn-info" data-toggle="modal" data-target="#employeeModel">Add Employee</button>
		<modelpopup modalId="employeeModel" :title="modelTitle">
			Employee info
		</modelpopup> 
	</div>
  </div>
</template>
<script>
import modelpopup from '../../_components/ModelPopup'
export default {
components:{modelpopup},
  data() {
    return {
		modelTitle: this.$i18n.t('CreateNewEmployee'),
	};
  }
};
</script>

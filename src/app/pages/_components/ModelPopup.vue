<template>
  <!-- Modal -->
  <div class="modal fade" :id="modalId" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
			<slot>
			</slot>				
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('CancelText', { defaultValue: 'Cancel'}) }}</button>
       	  <button type="button" class="btn btn-primary" data-dismiss="modal" @click="onSubmit">{{ $t('SaveText', { defaultValue: 'Save'}) }}</button>
	   </div>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'modalId'],
  components: {},
  methods:{
    onCancelClick() {
      this.$emit(false);
    },
    onSubmit() {
      this.$emit(true);
    },
  },
  data() {
    return {};
  }
};
</script>

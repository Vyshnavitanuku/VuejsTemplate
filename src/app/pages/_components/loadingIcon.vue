<template>
  <div class="loading-icon flex justify-center align-center" style="">
    <i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i><!--Loading Checklists... vs loading-->
    <span class="sr-only">{{ $t('LoadingText', { defaultValue: 'Loading…'}) }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

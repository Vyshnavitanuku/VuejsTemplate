<template>
    <nav class="app_toolbar app_header" style="margin-top: 0px; padding-right: 0px; padding-left: 0px;">
        <div class="app_toolbar__content" style="height: 64px;">
        <!--<button type="button" data-ripple="true" class="toolbar__side-icon btn btn--icon">
        <div class="btn__content"><i aria-hidden="true" class="material-icons icon">menu</i></div></button>-->
            <div class="app_toolbar__title col-xs-9">
                Application
            </div>
            <div class="row">
			<div class="col-xs-2"/>
			<div class="col-xs-7">
                <label for="languageOptions">Language</label>
                <select class="languageOptions" v-model="languageSelected">
                    <option v-for="lang in languages" v-bind:value="lang.id">
                    {{ lang.text }}
                    </option>
                </select>
				</div>
				<div class="col-xs-3">
				<button class="btn" @click="Logout">{{ $t('Logout', { defaultValue: 'Logout'}) }}</button>
				</div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapState } from "vuex";
import {deleteCookie} from '../utility/helper.js';
export default {
  computed: {
    languageSelected: {
      get() {
        return this.$store.state.languages.languageSelected;
      },
      set(val) {
        this.$i18n.i18next.changeLanguage(val);
        this.$store.commit("SET_LANGUAGE_SELECTED", val);
      }
    },
    ...mapState({
      languages: state => state.languages.languages
    })
  },
  methods: {
	  Logout(){
		deleteCookie('isValidUsertest');
		this.$router.push({name:'login'})
	  }
  },	
};
</script>

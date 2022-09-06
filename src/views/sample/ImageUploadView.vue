<template>
  <!-- Wrap START -->
  <div class="ImageUploadView page-wrap">
      <v-file-input v-model="files" show-size label="File input"></v-file-input>
      <v-btn @click="upload" color="primary">Upload</v-btn>
      <p>File Name : {{ files.name }}</p>
  </div>
  <!-- Wrap END -->
</template>

<style></style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";
import axios from 'axios'

export default {
  name: "ImageUploadView",
  data() {
    return {
      files:[]
    };
  },
  methods: {
    ...mapActions(["logout"]),
    async upload() {
      var fd = new FormData();
      fd.append('files', this.files)
      await axios.post('/upload',
            fd, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then( response => {
            console.log('SUCCESS!!');
            console.log(response.data)
          })
          .catch(function () {
            console.log('FAILURE!!');
          });
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "이미지 업로드";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
};
</script>

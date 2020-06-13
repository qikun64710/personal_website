<template>
    <div class="ue">
        <quill-editor 
            class="editor"
            ref="myTextEditor"
            :value="content"
            :options="editorOption"
            @change="onEditorChange"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)">
        </quill-editor>    
        <!-- <div class="output ql-snow">
            <div class="ql-editor" v-html="content"></div>
        </div> -->
    </div>
</template>
<script>
import quillConfig  from './quill-config.js'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import dedent from 'dedent'
// import hljs from 'highlight.js'
import debounce from 'lodash/debounce'
// highlight.js style
import 'highlight.js/styles/tomorrow.css'
// import theme style
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
export default {
    data(){
        return{
            editorOption: quillConfig,
            content: dedent`你好`,
        }
    },
    methods:{
        onEditorChange: debounce(function(value) {
        this.content = value.html
        this.$emit("quill",this.content)
      }, 466),
      onEditorBlur() {
        // console.log('editor blur!', editor)
      },
      onEditorFocus() {
        // console.log('editor focus!', editor)
      },
      onEditorReady() {
        // console.log('editor ready!', editor)
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      },
    },
    mounted() {
      console.log('this is Quill instance:', this.editor)
    }
}
</script>
<style lang="less" scoped>
.ue {
    display: flex;
    flex-direction: column;
    .editor {
      height: 40rem;
      overflow: hidden;
    }
    .output {
      width: 100%;
      height: 20rem;
      margin: 0;
      border: 1px solid #ccc;
      overflow-y: auto;
      resize: vertical;
      &.code {
        padding: 1rem;
        height: 16rem;
      }
      &.ql-snow {
        border-top: none;
        height: 24rem;
      }
    }
  }
</style>
import { defineComponent, ref } from 'vue';

export const Third = defineComponent({
  setup(props, ctx) {
    return ()=>(
      <div> Third </div>
    )
  }
})
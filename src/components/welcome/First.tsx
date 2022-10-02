import { defineComponent, ref } from 'vue';

export const First = defineComponent({
  setup(props, ctx) {
    return ()=>(
      <div> First </div>
    )
  }
})
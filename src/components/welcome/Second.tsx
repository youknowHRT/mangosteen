import { defineComponent, ref } from 'vue';

export const Second = defineComponent({
  setup(props, ctx) {
    return ()=>(
      <div> Second </div>
    )
  }
})
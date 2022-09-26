import { defineComponent, ref } from 'vue';
export const Bar = defineComponent({
  setup(props, ctx) {
    return ()=>(<div> bar</div> )
  },
})
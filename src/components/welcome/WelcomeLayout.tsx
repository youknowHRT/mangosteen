import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss'

export const WelcomeLayout = defineComponent({
  setup(props, ctx) {
    const {slots:{icon,title,buttons}}=ctx
    return ()=>(
      <div class={s.wrapper}>
        <div class={s.card}>
          {icon?.()}
          {title?.()}
        </div>
        <div class={s.actions}>
          {buttons?.()}
        </div>
      </div>
    )
  }
})
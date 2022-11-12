import { defineComponent, ref, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import s from './welcome.module.scss'
export const Welcome = defineComponent({
  setup(props, ctx) {
    return ()=><div class={s.wrapper}>
      <header>
        <svg>
          <use xlinkHref='#mangosteen'></use>
        </svg>
        <h1>山竹记账</h1>
      </header>
      <main class={s.main}>
        <RouterView name='main'>
          {
            ({Component:X, route: R}: {Component: VNode, route: RouteLocationNormalizedLoaded})=>
            <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
            leaveActiveClass={s.slide_fade_leave_active} leaveToClass={s.slide_fade_leave_to}>
              {X}
            </Transition>
          }
        </RouterView>
      </main>
      <footer> <RouterView name='footer'></RouterView></footer>
    </div>
  }
})
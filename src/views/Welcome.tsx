import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'
export const Welcome = defineComponent({
  setup(props, ctx) {
    return ()=>(<div class={s.wrapper}>
        <header>
          <img src={logo} alt="" />
        </header>
        <main> <RouterView/> </main>
        <footer>buttons</footer>
      </div>
    )
  }
})
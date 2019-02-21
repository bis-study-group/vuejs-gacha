const API_URL = 'https://ruddy-mail.glitch.me/api/gacha';

Vue.component('gif', {
  template: `
    <figure v-show="/* Insert code here... */">
      <img :src="/* Insert code here... */" alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
  `,
  props: [
    /* Insert code here... */
  ],
});

new Vue({
  el: '#app',
  data: {
    result: '',
  },
  methods: {
    play() {
      // いったん表示をクリアしておく
      this.result = '';

      // Axiosを使ってAPI呼び出し
      /* Insert code here... */
    },
  },
});

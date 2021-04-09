const API_URL = 'https://ruddy-mail.glitch.me/api/gacha';

Vue.component('gif', {
  template: `
    <figure v-show="$root.result != ''">
      <img :src="$root.result" alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
  `,
  props: [
    'src'
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
      const promise = axios.get(API_URL)
      promise.then(response => {
        this.result = response.data.url
      })
    },
  },
});

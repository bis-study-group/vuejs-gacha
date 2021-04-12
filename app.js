const API_URL = 'https://ruddy-mail.glitch.me/api/gacha';

Vue.component('gif', {
  template: `
    <figure v-show="url != ''">
      <img :src="url" alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
  `,
  props: [
    'src',
    'url'
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

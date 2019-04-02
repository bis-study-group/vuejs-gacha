const API_URL = 'https://ruddy-mail.glitch.me/api/gacha';

Vue.component('gif', {
  template: `
    <figure v-show="src">
      <img :src="src" alt="" />
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
      axios.get(API_URL)
        .then(response => {
          this.result = response.data.url;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
});

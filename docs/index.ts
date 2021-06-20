import { createApp } from 'vue';
import App from './app.vue';
import MyComponent from '../src';

const app = createApp(App);

app.component(MyComponent.name, MyComponent);
app.mount('#app');

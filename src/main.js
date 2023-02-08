/**import App from './App.svelte';
import axios from 'axios';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
 **/

//import Login from './Login.svelte';
import Register from './Register.svelte';


//const login = new Login({
//	target: document.body
//});

const register = new Register({
target: document.body
});



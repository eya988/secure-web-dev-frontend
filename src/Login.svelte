<script>
    import axios from 'axios';

    let username = '';
    let password = '';
    let error = '';

    async function submitForm() {
        try {
            const response = await axios.post('http://localhost:3000/users/login', {
                name,
                password,
            });
            console.log(response.data);
            document.location.href="Locations.svelte";

        } catch (error) {
            console.error(error);
        }
    }


</script>


<div class="container">
<h1>Login page</h1>
<form on:submit|preventDefault={submitForm}>
    <input type="text" bind:value={username} placeholder="Nom d'utilisateur" />
    <input type="password" bind:value={password} placeholder="Mot de passe" />
    <input onclick="submit" type="submit" value="Se connecter" />
</form>
</div>
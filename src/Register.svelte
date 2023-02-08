<script>
    let name = '';
    let password = '';
    let role='user';
    import axios from 'axios';


    async function submitForm() {
        try {
            const response = await axios.post('http://localhost:3000/users/register', {
                name,
                password,
                role,
            });
            console.log(response.data);
            document.location.href="Locations.svelte";

        } catch (error) {
            console.error(error);
        }
    }
</script>

<div class="container">
    <h1>Register page</h1>
    <form on:submit|preventDefault={submitForm}>
        <input type="text" bind:value={name} placeholder="Nom d'utilisateur" />
        <input type="password" bind:value={password} placeholder="Mot de passe" />
        <input onclick="submit" type="submit" value="Se connecter" />
    </form>
</div>


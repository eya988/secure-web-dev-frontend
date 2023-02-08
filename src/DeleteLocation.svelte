<script>
    let locationId = '';

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await fetch('http://localhost:8000/locations', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    locationId: 123
                })
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // Use the data returned from the function here
                })
                .catch(error => {
                    console.error(error);
                });

        } catch (error) {
            console.error(error);

        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        locationId
        <input type="text" bind:value={locationId}/>
    </label>
    <button type="submit">Delete</button>
</form>
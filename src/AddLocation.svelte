<script>

    let filmType = '';
    let filmProducerName = '';
    let endDate = '';
    let filmName = '';
    let district = '';
    let geolocation = {
        coordinates: [],
        type: ''
    };
    let sourceLocationId = '';
    let filmDirectorName = '';
    let address = '';
    let startDate = '';
    let year = '';

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await fetch('http://localhost:8000/locations', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    filmType, filmProducerName, endDate, filmName,
                    district, geolocation, sourceLocationId, filmDirectorName,
                    address, startDate, year
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
    <h1> Add location</h1>
    <label>
        filmType
        <input type="text" bind:value={filmType}/>
    </label>
    <label>
        filmProducerName
        <input type="text" bind:value={filmProducerName}/>
    </label>
    <label>
        endDate
        <input type="date" bind:value={endDate}/>
    </label>
    <label>
        filmName
        <input type="text" bind:value={filmName}/>
    </label>
    <label>
        district
        <input type="text" bind:value={district}/>
    </label>
    <label>
        geolocation
        <input type="text" bind:value={geolocation.coordinates} />
        <input type="text" bind:value={geolocation.type} />
    </label>
    <label>
        sourceLocationId
        <input type="text" bind:value={sourceLocationId}/>
    </label>
    <label>
        filmDirectorName
        <input type="text" bind:value={filmDirectorName}/>
    </label>
    <label>
        address
        <input type="text" bind:value={address}/>
    </label>
    <label>
        startDate
        <input type="date" bind:value={startDate}/>
    </label>
    <label>
        year
        <input type="text" bind:value={year}/>
    </label>
    <button type="submit">Add a location</button>
</form>
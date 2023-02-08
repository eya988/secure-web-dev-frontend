<script>
    import axios from 'axios';

    let items = [

    ];
    let page = 0;
    let itemsPerPage = 3;

    function prevPage() {
        if (page > 0) {
            page--;
        }
    }

    function nextPage() {
        if (page < items.length / itemsPerPage - 1) {
            page++;
        }
    }

    async function fetchData() {
        const response = await axios.get('http://localhost:3000:locations');
        items = response.data;
    }

    $: mounted = fetchData();
</script>

<table>
    {#each items.slice(page * itemsPerPage, (page + 1) * itemsPerPage) as item}
        <tr>
            <td>{location.id}</td>
            <td>{location.address}</td>
        </tr>

    {/each}
</table>>
<button on:click={prevPage}>Prev</button>
<button on:click={nextPage}>Next</button>
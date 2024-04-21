<script>
    import { onMount } from 'svelte';

    export let food_item;
    
    import axios from 'axios'
    const DONE = 2;
    const LOADING = 1;
    const IDLE = 0;
    
    let status = IDLE;

    let hintText = ""

    async function getHint() {
        status = LOADING
        let data = JSON.stringify({
        text: food_item,
        });

        let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://vtpm0rc0-8000.usw3.devtunnels.ms/hint",
        headers: {
            "Content-Type": "application/json",
            Cookie:
            ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxOqACAvGFdwrTCwyPajfmqg1fZsc6k3yvP0bCuuuJhJ-2tJj2wyaOkalm7cmr4k-mBi4GX8ynU4d5d5eS2n4uTbPhUwH5oQUuldsTq06S4Ow3hHml1DRryTYCa4ekQAz_wSL4r_atEagxa9a_rLi0fwJ6R8oPFfcs-UE4lytAcpQOXlw6TfA-6078cbrqTLXEu0wcsijKxMt7fG_ExZHerJMR8uHZIWTr8_ysGtQsGivzrmidCkf5GjKiI87Ov_F1jRAGfm3VGDLpLtK5romR3OAqkYJDIoQT6WCuq8T7_exgvboQfOki0yd_BiOFB-LdYjw_8lYiUfz47wFV46-1sxJUGQMj7HOP0ME4lNnS4bny8TVCs6koaKHtJ2xRO8RBUW4eFsBykc2QTOnIrtpVTWDOd8VmpBslp3oSsMIt5ePobW2BAjvUYS6rzpJmsP9mGXqXiwjHzKym_qrv0F1b5z--frgYPJGogewd7y5N724dJmI7WRke2WFb_MwDKMLvU3xWE7kRGjt1nAisFSCbGtPwgl0GbYLduHCbiD9vr-5r6tguvTOZ0OUX1kQuc7c42p9h-Si05oxB3n3tdIIkxrd-nPM1KJ8b8NN2BTqFpOQsuJpGy15-KqjikXuivYuvR2Ra4fvJdViY4b-dIPxCPEqyPW0kwoftcO4tN_nUgMOamVh8_Bq4ao3ceUFwsCOAoy6DEqrb-kwxzu6DK_5e-Fylkd5Q-Ho3r5D8H8iY9AjLlSyG6nOmIQuhLPOKB5Q8UMCTlpxNGm0MtX5D6czAx-w7JF_Qlta2eg-2zTevqPB-jIiqG3ST1PbHtb_7olsrCtDbGWmGtxLt0M6uxvL45L-_lU4KX3CUuuzlbZbMJqsHnFFvXunfN5OMjFllGASWFbari9A8dcUQQYZiyfNP_z",
        },
        data: data,
        };

        axios
        .request(config)
        .then((response) => {
            hintText = response.data.value;
            status = DONE
            console.log(JSON.stringify(response.data.value));
        })
        .catch((error) => {
            hintText = "Error";
            status = DONE
            console.log(error);
        });
        
    }
</script>

<h1 class="jersey-10-regular text-md">
    {#if status === LOADING}
        <div class="text-center">
            <span class="loading loading-ring loading-lg"></span>
        </div>
    {:else if status === DONE}
        {hintText}
    {:else}
        <div class="text-center">
            <button on:click={getHint} class="mt-4 border border-r-2 border-b-2 border-blue-300 hover:bg-blue-300 hover:text-white text-blue-500 p-2">Generate Hint</button>
        </div>    

    {/if}
    
</h1>




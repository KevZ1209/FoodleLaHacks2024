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
        data = JSON.stringify({text: "steak"})
        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://vtpm0rc0-8000.usw3.devtunnels.ms/hint',
                headers: { 
                    'Content-Type': 'application/json', 
                    'Cookie': '.Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxOdpF4CMAHLgESO2hyDOnM2bsEejIqOA3lW56_0kh-2Fl56WEP2gCF14kyEn14xXJWYzPXzrjiQOy7AMxiuYL9wzxXQAX-k6c-97Tow3huZiGfukjDBhigfDZf4fKeO4wzH2nwgtHC8bYe3d1JbLxJUODwnUME6rs1JLPDljlR56LiABDJV7zdwaU24OolgiAnv2Wc3npeuFjlvN3_wN1rUt7PJGffvBa1Cc7hecVfAoOFoK1DDwkWtxQsjdxjql1ylIC4RjyitbAET88sH6clXOTmQbIOAhUBxByWPeB0fXlevN8l24YrZIbVkgwvtn2m7CKvES1qd3z06NL9CmNM4GkiqDLe5ndAFvrvvkmkw1DhqATY-SFppFDfhHqRPFSH6uIMvm4VQAPWE_v4l34sipXP81vD_u-6oWhPODhjqZRJjaugqCADTf3Efw9WuBdzdR6f8uggLlJIeryx-gpZxZ_8oIJzvnnnariL57nZKDJwf2nmHSW4n2ZMwejvOZDOwoz4GIpJKgbscDVlBJWrUt0fvAnxA425JN9hvmeLlJupDkzZo7AaC0vAdMpVZJN46pGFSBSHN-FY1RyFhQAiy3ctGz9JNGB2V6AFGOdU-n0mt_OFn4EKulTDh-txZivTqu59ZlNWSZ2FOMN_kGSrHkC0Bka4J1GkCSIny7jmG2VG9T-n61I1B5t3_qqZSqROyy4CqY0QAlgTqdMeG5bV1Blv0V1dG3U09HDWGHTVO0H1NDZ-wI9dps14KkYW7KMxmXjDuUeRqCZoxT1Hspby8hx4o7F35Xeqfqj_G8YOCn1-J6xZY2Z6NXAvHcOEg4ZHk9GMqJ8vvbhFxC57QcQdjdkYW7H0fsf5_pPaMaw3M5iXszEIsgNeKPjBlcVkPZYxbUVYvXRTflcCHLnKFc8wP'
                },
                data : data
            };

            const response = await axios.request(config)

            hintText = response.data
        }
        catch (error) {
            hintText = error
        }
        status = DONE
    }
</script>

<h1 class="jersey-10-regular text-md">
    {#if status === LOADING}
        <div class="text-center">
            <span class="loading loading-ring loading-lg"></span>
        </div>
    {:else if status === DONE}
        {hintText.setup}
    {:else}
        <div class="text-center">
            <button on:click={getHint} class="mt-4 border border-r-2 border-b-2 border-blue-300 hover:bg-blue-300 hover:text-white text-blue-500 p-2">Generate Hint</button>
        </div>    

    {/if}
    
</h1>


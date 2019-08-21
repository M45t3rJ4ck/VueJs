<template>
    
    <div class="online-status">

        <div class="online" v-if="online">

            <span class="light"></span>
            <p>A staff member is online and available</p>

        </div>

        <div class="offline" v-if="!online">

            <span class="light"></span>
            <p>A staff member is offline and not available</p>

        </div>

    </div>

</template>

<script>

export default {
    props: ['status'],
    computed: {
        online () {
            return this.status == 'online'
        }
    }
}

</script>

<style>

    .online-status {
        background: #eee;
        border: 1px dashed #ddd;
        display: inline-block;
        padding: 10px;
    }

    p {
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        color: #555;
    }

    .light {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .online .light {
        background: limegreen;
    }

    .offline .light {
        background: crimson;
    } 

</style>

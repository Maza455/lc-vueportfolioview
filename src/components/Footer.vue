<template>
<footer class="color-changing-footer py-3">
    <div class="container">
        <div class="row">
            <p class="lead">Zukisa's Portfolio &copy; <span>{{ currYear }}</span></p>
            <div>⭐⭐⭐</div>
        </div>
    </div>
</footer>
</template>

  
<script>
export default {
    name: 'FooterComp',
    data() {
        return {
            currYear: new Date().getFullYear()
        }
    }
}
</script>

  
<style scoped>
.color-changing-footer {
    animation: colorChange 5s infinite;
}

@keyframes colorChange {
    0% {
        background-color: SlateBlue;
    }

    50% {
        background-color: #E5E4E2;
    }

    100% {
        background-color: #808080;
    }
}

.color-changing-footer p {
    color: white;
    font-size: 2em;
    font-weight: bold;
}
</style>

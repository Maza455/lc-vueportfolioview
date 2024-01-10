<template>
    <div class="container">
        <div class="row">
            <p class="lead bg-indigo-500 text-white h-16">Zukisa's Portfolio &copy;
                <span> {{ currYear }} </span>
            </p>
        </div>
    </div>
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
.bg-indigo-500 {
    background-color: #4f46e5;
}
</style>
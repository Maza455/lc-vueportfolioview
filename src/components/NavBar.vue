<template>
<nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container-fluid">
        <router-link to="/">
            <img class="logo img-fluid" src="../assets/Proctor.png">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link active">
                        <h4>Home</h4>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">
                        <h4>About</h4>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/resume" class="nav-link" href="#">
                        <h4>Resume</h4>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/project" class="nav-link" href="#">
                        <h4>Projects</h4>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/testimonials" class="nav-link" href="#">
                        <h4>Testimonials</h4>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link" href="#">
                        <h4>Reach Me</h4>
                    </router-link>
                </li>
                <li class="nav-item">
                    <input class="toggle desktop-show" type="checkbox" v-model="isDark" @click="toggleTheme">
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            isDark: false,
        };
    },
    methods: {
        toggleTheme() {
            this.isDark = !this.isDark;
            const body = document.body;
            if (this.isDark) {
                body.classList.add("dark-theme");
            } else {
                body.classList.remove("dark-theme");
            }
        },
    },
};
</script>

<style scoped>
.logo {
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    float: left;
    object-fit: fill;
    transform: scale(1);
    transition-property: width;
    transform: translateY(0px);
    transition-duration: 5s, 5s;
    transition: transform 4s, 4s;
}

.dark-theme .navbar-nav .nav-link {
    color: rgb(203, 28, 136);
}

.dark-theme .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>

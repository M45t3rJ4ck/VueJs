<template>

    <div id="navbar">

        <nav>

            <h2>Navbar Menu</h2>

            <ul>

                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Profile</a></li>
                <li><a href="">Blogs</a></li>

            </ul>

        </nav>

    </div>
    
</template>

<script>

export default {
    name: 'Navbar',
    data () {
        return {
            
        }
    }
}

</script>

<style>

    nav {
        text-align: center;
    }

    nav ul {
        padding: 0;
    }

    nav li {
        display: inline-block;
        list-style-type: none;
        margin: 0;
    }

    h2 {
        text-decoration: underline;
    }

</style>

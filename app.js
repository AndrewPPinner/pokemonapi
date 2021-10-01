const app = Vue.createApp({
    data() {
        return{
            pokemon: null,
            baseHP: null,
            attack: null,
            defense: null,
            spAttack: null,
            spDefense: null,
            speed: null,
            poke: null,
            show: null,
            imgURL: null,
            imgURLback: null,
            ability1: null,
            ability2: null,
            hidden: null
        }
    },
    methods: {
        getPokemon(pokemon) {
            axios
            .get("https://cors-anywhere.herokuapp.com/pokeapi.co/api/v2/pokemon/" + pokemon)
            .then(response => (this.ability2 = "Ability: " + response.data.abilities[1].ability.name, this.ability1 = "Ability: " + response.data.abilities[0].ability.name, this.imgURLback = response.data.sprites.back_default, this.imgURL = response.data.sprites.front_default, this.poke = response.data.species.name, this.baseHP = "HP: " + response.data.stats[0].base_stat, this.defense = "Defense: " + response.data.stats[2].base_stat, this.attack = "Attack: " + response.data.stats[1].base_stat, this.spAttack = "Special Attack: " + response.data.stats[3].base_stat, this.spDefense = "Special Defense: " + response.data.stats[4].base_stat, this.speed = "Speed: " + response.data.stats[5].base_stat, this.show = true, console.log(response)))
            .catch(e => (console.log(e)))
        }
    }

})

app.mount("#app")
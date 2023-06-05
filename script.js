const {createApp} = Vue
createApp ({
    data () {
        return {
            datumA: "hbdcih",
            datumB: {
                abab: 6,
                bacbac: "no"
            },
            array: ["no", "vabbe", "bro", 6, false]
        }
    },

    methods: {
        A () {
            // Esegui roba
        },
        metodoB: function () {
            // Esegui altra roba
        },
        metodoC: (nome) => {
            // console.log ("Ciao, " + nome + "!")
        }
    },
}).mount ("#app")
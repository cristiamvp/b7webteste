Vue.component('contador', {
    data: function () {
        return {
            c: 0
        };
    },
    methods: {
        aumentar: function () {
            this.c++
        }
    },
    template: '<div><span>{{c}}x</span> <button v-on:click="aumentar">Aumentar</button></div>'
});

Vue.component('menu-superior', {
    data: function () {
        return {
            texto: 'texto qualuer'

        };
    },
    template: '<button>{{texto}}</button>'
});


let postagem = {
    props: ['titulo'],
    methods: {
        responder: function () {
            alert("RESPONDER:" + this.titulo)
        }
    },
    template:

        `<div> 
            <h2>{{titulo}}</h2> 
            <p><slot></slot></p>
            <button v-on:click="responder">Responder</button>
            
        </div>`
};

let conteudo = new Vue({
    el: '#conteudo',
    data: {
        responderAberto: true,
        respostaTitulo: ''
    },
    components: {
        postagem
    }
});

let app = new Vue({
    el: '#app',
    data: {

    },
})

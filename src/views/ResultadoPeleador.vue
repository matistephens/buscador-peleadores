<template>
<div>
    <div v-if="peleador">
        <h1>Peleador Encontrado!</h1>
        <p>id: {{peleador.id}}</p>
        <p>Nombre: {{peleador.nombre}}</p>
        <img :src="peleador.imgSrc" alt="">
    </div>
    <div v-if="peleador === null">
        <h1>No encontrado</h1>
    </div>

</div>
  
</template>

<script>
export default {
    data: () => ({
        peleador: {id: "", nombre: "", imgSrc: ""},
    }),
    created() {
        const idPeleador= this.$route.params.id
        fetch("/peleadores.json")
            .then((res) => res.json())
            .then((data) => {
                this.peleador = data.find((item => (
                    item.id === idPeleador
                )))
            || null})
           
    }

}
</script>

<style>

</style>
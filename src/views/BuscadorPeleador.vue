<template>
  <div>
    <h1>Buscador de peleadores</h1>
    <form @submit.prevent="buscarPeleador(id)">
        <div>
            <input type="text" placeholder="ingrese ID" v-model="id" required>
            <button type="submit">Buscar</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "buscadorPeleador",
    data: () => ({
        id: "",
    }),
    methods: {
      buscarPeleador(id) {
        this.$router.push(`/peleadores/${id}`)
        }
    }
}
</script>

<style>
</style>
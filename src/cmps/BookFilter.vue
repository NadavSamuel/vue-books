<template>
    <section class="book-filter ">
        <h3>Filter</h3>
        <form @input="emitFilter" class="column-layout"> 
        <input type="text" placeholder="Enter book name" v-model="filterBy.txt"  />
        <input type="number" placeholder="Enter minimum price" v-model="filterBy.minPrice"  />
        <input type="number" placeholder="Enter maximum price" v-model="filterBy.maxPrice"  />
        </form>
    </section>
</template>

<script>
export default {
    name: 'BookFilter',
    data() {
        return {
            filterBy: {
                txt: '',
                minPrice:null,
                maxPrice:null
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}
</script>
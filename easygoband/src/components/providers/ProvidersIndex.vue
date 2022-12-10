<script lang="ts">
import { defineComponent } from 'vue';
import type { IProvider } from '@/interfaces/providerInterface';
import { getProviders } from '@/api/providers';
import columns from './providersTable/Columns';

export default defineComponent({
    setup() {
        
    },
    data() {
        return {
            providersData: [] as IProvider[],
            columns,
        }
    },
    methods:{
        async fetchProviders(){
            const res = await getProviders();
            this.providersData = res;
        }
    },
    async created() {
        await this.fetchProviders();
  }
})

</script>

<template>
    <div class="providers-table">
        <a-table bordered :data-source="providersData" :columns="columns()">
            
        </a-table>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.providers-table{
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>

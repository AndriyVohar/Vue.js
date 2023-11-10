<template>
    <div>
        Фільтрація:
        <div>
            <label>
                Name
                <input v-model="currentCompany.name" type="text" />
            </label>
        </div>
        <div>
            <label>
                Address
                <input v-model="currentCompany.address" type="text" />
            </label>
        </div>
        <div>
            <label>
                Phone
                <input v-model="currentCompany.phone" type="text" />
            </label>
        </div>
        <div>
            <label>
                Specialization
                <input v-model="currentCompany.specialization" type="text" />
            </label>
        </div>
        <div>
            <label>
                Working Hours
                <input v-model="currentCompany.workingHours" type="text" />
            </label>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'CompanyFilter',

    data() {
        return {
            currentCompany: {},
        }
    },

    watch: {
        currentCompany: {
            handler(newFilter) {
                this.onUpdateFilter(newFilter)
            },
            deep: true,
        },
    },

    methods: {
        ...mapActions(['onUpdateFilter']),
    },
}
</script>

<style lang="scss" scoped></style>

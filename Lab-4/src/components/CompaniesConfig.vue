<template>
    <div>
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
        <button @click="onAction">Create</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'CompaniesConfig',

    data() {
        return {
            currentCompany: {},
        }
    },

    computed: {
        ...mapGetters(['getCompanyByName']),
        companyName() {
            return this.$route.params.companyName
        },
    },

    created() {
        if (this.companyName) this.currentCompany = { ...this.getCompanyByName(this.companyName) }
    },

    methods: {
        ...mapActions(['onAddCompany', 'onUpdateCompany']),
        onAction() {
            if (!this.companyName) this.onAddCompany(this.currentCompany)
            else this.onUpdateCompany(this.currentCompany)
            this.$router.push({ path: '/' })
        },
    },
}
</script>

<style lang="scss" scoped></style>

<template>
    <v-dialog max-width="600">
        <template v-slot:activator="{ on, attrs }" >
            <v-btn text v-bind="attrs"
            v-on="on" class="success">Add New Project</v-btn>
        </template>
            <v-card>
                <v-card-title>
                    <h2>new project</h2>
                </v-card-title>
                <v-card-content>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules" ></v-text-field>
                        <v-textarea label="Infomartion" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                        <v-menu
                            v-model="menu1"
                            :close-on-content-click="false"
                            max-width="290"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                :value="due"
                                clearable
                                label="Due Date"
                                readonly
                                v-bind="attrs"
                                v-on="on"                               
                                prepend-icon="date_range"
                                @click:clear="due = null"
                                :rules="inputRules"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="due"
                                @change="menu1 = false"
                                
                            ></v-date-picker>
                            </v-menu>

                        <v-spacer></v-spacer>

                        <v-btn text class="success mx-0" @click="submit">Add Project</v-btn>
                        
                    </v-form>
                </v-card-content>
                
            </v-card>
    </v-dialog>
</template>

<script>

// import format from 'date-fns/format'
// import db from '@/fb'

export default{
   data() {
       return {
           title: '',
           content: '',
           due: null,
           menu1: false,
           inputRules: [
               v => v.length >= 3 || "Minimum length is 3 characters!"
           ]
       }
   },
   methods: {
       submit() {
           if (this.$refs.form.validate()) {
            // const project = {
            //     title: this.ttile,
            //     content: this.content,
            //     due: this.due,
            //     person: 'The Net',
            //     status: this.status
            // }
            // db.collections('projects').add(project).then( () => {
            //     console.log("add to db");
            // })
           }
       }
   },
   computed: {
    //    formatDate() {
    //        return this.due ? format(this.due, 'Do MM YYYY') : ''
    //    }
   }
}
</script>

<template>
    <div
        class="tw-px-3 sm:tw-px-4 xl:tw-px-6 xxl:tw-px-8 tw-pt-1 tw-mx-auto md:tw-overflow-y-scroll md:tw-h-screen tw-pb-24 tw-custom-scrollbar">
        <header
            class="tw-flex tw-justify-between tw-items-center md:tw-items-end tw-mb-4 md:tw-h-12 tw-pt-2 md:tw-pt-0">
            <div class="tw-flex">
                <h1 class="tw-text-xl tw-font-medium tw-mb-1">Books</h1>
            </div>
        </header>
        <div class="tw-flex tw-flex-wrap tw-border-b tw-border-gray-200 tw-py-6">
            <v-data-table
                :headers="headers"
                :items="books"
                hide-default-footer
                class="tw-w-full"
                :search="search"
                :disable-pagination=true
                :disable-sort=true
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >

                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                            class="tw-mr-2 tw-ml-2"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-dialog
                            v-model="dialog"
                            max-width="800px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    New Item
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field
                                                    v-model="editedItem.name"
                                                    label="Name"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row v-if="editedItem.image!=''">
                                            <v-img
                                                max-height="150"
                                                max-width="250"
                                                :src="`${apiUrl}/storage/${editedItem.image}`"
                                            ></v-img>
                                        </v-row>
                                        <v-row v-if="editedItem.image==''">
                                            <v-col cols="12">
                                                <file-uploader
                                                    v-on:uploadFinished="uploadFinished"
                                                    from-src="books"
                                                    accept="image/*"
                                                    :is-multiple=false
                                                    :maxSize="1024"
                                                    :name="editedItem.name"></file-uploader>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="close"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="save"
                                    >
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="headline">Are you sure you want to delete this item?
                                </v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <div class="tw-flex tw-flex-row-reverse tw-p-2">
                        <font-awesome-icon style="cursor: pointer;"
                                           icon="arrow-up"
                                           @click="moveUp(item)"
                                           v-if="books.map(function(x) {return x.id; }).indexOf(item.id)>0"
                                           class="tw-text-xl md:tw-text-2xl tw-mr-4"/>
                        <font-awesome-icon style="opacity: 0;"
                                           icon="arrow-up"
                                           v-else
                                           class="tw-text-xl md:tw-text-2xl tw-mr-4"/>
                        <font-awesome-icon style="cursor: pointer;"
                                           icon="arrow-down"
                                           @click="moveDown(item)"
                                           v-if="books.map(function(x) {return x.id; }).indexOf(item.id)<books.length-1"
                                           class="tw-text-2xl tw-mr-4"/>
                        <font-awesome-icon style="opacity: 0;"
                                           icon="arrow-down"
                                           v-else
                                           class="tw-text-2xl tw-mr-4"/>
                        <font-awesome-icon style="cursor: pointer;"
                                           @click="editItem(item)"
                                           class="mr-2 tw-text-xl md:tw-text-2xl tw-mr-4"
                                           icon="edit"/>
                        <font-awesome-icon style="cursor: pointer;"
                                           @click="deleteItem(item)"
                                           icon="trash"
                                           class="tw-text-xl md:tw-text-2xl tw-mr-4"/>

                    </div>
                </template>
                <template v-slot:item.name="{ item }">
                    <span class="tw-p-2 tw-text-xl">{{ item.name }}</span>
                </template>
                <template v-slot:item.image="{ item }">
                    <v-img
                        class="tw-p-5"
                        contain
                        :src="`${apiUrl}/storage/${item.image}`"
                        :lazy-src="`${apiUrl}/storage/${item.image}`"
                        max-height="150"
                        max-width="150"
                    ></v-img>
                </template>
            </v-data-table>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import FileUploader from "../../components/FileUploader";

export default {
    name: "books",
    components: {FileUploader},
    data() {
        return {
            apiUrl: '',
            search: '',
            resortItems: [],
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                    text: 'Image',
                    value: 'image',
                },
                {
                    text: 'Name',
                    value: 'name',
                },
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            editedIndex: -1,
            editedItem: {
                id: 0,
                name: '',
                image: '',
                order_num: 0,
            },
            defaultItem: {
                id: 0,
                name: '',
                image: '',
                order_num: 0,
            },
        }
    }, computed: {
        ...mapGetters({
            books: 'books',
            customErrorsMsg: 'customErrorsMsg',
        }),
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },
    created() {
        this.getBooks();
    },
    methods: {
        ...mapActions({
            getAllBooks: 'getAllBooks',
            setSortBooks: 'setSortBooks',
            RemoveBook: 'RemoveBook',
            AddNewBook: 'AddNewBook',
            UpdateBook: 'UpdateBook',
        }),
        async getBooks() {
            await this.getAllBooks()
        },
        editItem(item) {
            this.editedIndex = this.books.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem(item) {
            this.editedIndex = this.books.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        async deleteItemConfirm() {
            await this.RemoveBook(this.editedItem)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        async save() {
            if (this.editedIndex === -1) {
                await this.AddNewBook(this.editedItem)
            } else {
                await this.UpdateBook(this.editedItem)
            }
            this.close()
        },
        // sorting methods
        async move(array, element, delta) {
            this.resortItems = []
            const index = array.indexOf(element);
            const newIndex = index + delta;
            if (newIndex < 0 || newIndex == array.length) {
                return;
            } //Already at the top or bottom.
            const indexes = [index, newIndex].sort();
            array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]); //Replace from lowest index, two elements, reverting the order

            // save items
            this.books.forEach((value, index) => {
                let order_num = index + 1;
                this.resortItems.push({id: value.id, order_num: order_num})
            });
            await this.setSortBooks(this.resortItems)
        },
        moveUp(item) {
            this.move(this.books, item, -1);
        },
        moveDown(item) {
            this.move(this.books, item, 1);
        },
        uploadFinished(data) {
            this.editedItem.image = data[0].src;
        },
    },
    mounted() {
        this.apiUrl = document.head.querySelector('meta[name="api-base-url"]').content;
    },
}
</script>

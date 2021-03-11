<template>
    <div style="width: 100%;">
        <div style="width: 100%;" v-if="files">
            <div style="width: 100%;">
                <v-progress-linear
                    v-model="progress"
                    color="light-blue"
                    height="25"
                    reactive
                >
                    <strong>{{ progress }} %</strong>
                </v-progress-linear>
            </div>
        </div>

        <v-row no-gutters justify="center" align="center">
            <v-col cols="8">
                <v-file-input
                    :disabled="this.name==''"
                    :rules="rules"
                    v-model="files"
                    :accept="this.accept"
                    counter
                    :multiple="isMultiple"
                    prepend-icon="mdi-camera"
                    :label="this.label()"
                    @change="selectFile"
                ></v-file-input>
            </v-col>
            <v-col cols="4" class="pl-2">
                <v-btn large depressed color="primary" @click="upload">
                    Upload
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-alert v-if="message" border="left" color="blue-grey" dark>
            {{ message }}
        </v-alert>
    </div>
</template>

<script>
export default {
    name: "FileUploader",
    props: {
        fromSrc: String,
        name: String,
        accept: String,
        maxSize: Number,
        isMultiple: Boolean
    },
    data() {
        return {
            files: undefined,
            progress: 0,
            message: "",
            rules: [
                value => !value || !this.files.some(file => file.size > this.maxSize * 1024) || 'Maximum file size exceeded !',
            ],
        };
    },
    methods: {
        selectFile(file) {
            this.progress = 0;
            this.files = file;
            this.upload();
        },
        async upload() {
            if (!this.files) {
                this.message = "Please select a file!";
                return;
            }

            this.message = "";

            this.uploadFile(this.name, this.fromSrc, this.files, (event) => {
                this.progress = Math.round((100 * event.loaded) / event.total);
            })
                .then((response) => {
                    this.message = response.data.message;
                    this.$emit('uploadFinished', response.data.data)
                    this.files = undefined;
                    this.progress = 0;
                    this.message = "";
                })
                .catch(() => {
                    this.progress = 0;
                    this.message = "Could not upload the file!";
                    this.files = undefined;
                });
        },
        uploadFile(name, src, file, onUploadProgress) {
            let formData = new FormData();

            if (this.accept === "image/*") {
                for (let i = 0; i < this.files.length; i++) {
                    formData.append("image[" + i + "]", this.files[i]);
                }

                formData.append("name", name);
                formData.append("from", src);

                return axios.post("/api/files/image/file-upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    onUploadProgress,
                });
            }
        },
        label() {
            if (this.accept === "image/*") {
                if (this.isMultiple === false) {
                    return "Choose Image"
                } else {
                    return "Choose Images"
                }
            } else {
                if (this.isMultiple === false) {
                    return "Choose File"
                } else {
                    return "Choose Files"
                }
            }
        }
    },
}
</script>

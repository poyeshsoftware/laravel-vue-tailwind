<template>
    <div
        class="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div class="tw-max-w-md tw-w-full tw-space-y-8">
            <div>
                <h2 class="tw-mt-6 tw-text-center tw-text-3xl tw-font-extrabold tw-text-gray-900">
                    Book Store Sample Project
                </h2>
                <p class="tw-mt-2 tw-text-center tw-text-md tw-text-gray-600">
                    please login
                </p>
            </div>
            <form class="tw-mt-8 tw-space-y-6" @submit.prevent="login" method="POST">
                <input type="hidden" name="remember" value="true">
                <div class="tw-rounded-md tw-shadow-sm tw--space-y-px -space-y-px">
                    <div>
                        <label for="email-address" class="tw-sr-only">Email address</label>
                        <input v-model="form.email" id="email-address" name="email" type="email" autocomplete="email"
                               required
                               class="tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300
                               tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-t-md focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500
                               focus:tw-z-10 sm:tw-text-sm"
                               placeholder="Email address">
                    </div>
                    <div>
                        <label for="password" class="tw-sr-only">Password</label>
                        <input id="password" name="password" type="password" v-model="form.password"
                               autocomplete="current-password" required
                               class="tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300
                               tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-b-md focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500
                               focus:tw-z-10 sm:tw-text-sm"
                               placeholder="Password">
                    </div>
                </div>

                <div class="tw-flex tw-items-center tw-justify-between">
                    <div class="tw-flex tw-items-center">
                        <input id="remember_me" name="remember_me" type="checkbox"
                               class="tw-h-4 tw-w-4 tw-text-indigo-600 focus:tw-ring-indigo-500 tw-border-gray-300 tw-rounded">
                        <label for="remember_me" class="tw-ml-2 tw-block tw-text-sm tw-text-gray-900">
                            Remember me
                        </label>
                    </div>

                </div>

                <template v-if="error">
                    <div>
                        <v-alert
                            dense
                            outlined
                            type="error"
                        >
                            {{ $t("ErrorUserPass") }}
                        </v-alert>
                    </div>
                </template>

                <div>
                    <button type="submit"
                            class="tw-group tw-relative tw-w-full tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-text-sm
                            tw-font-medium tw-rounded-md tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2
                            focus:tw-ring-offset-2 focus:tw-ring-indigo-500">
          <span class="tw-absolute tw-left-0 tw-inset-y-0 tw-flex tw-items-center tw-pl-3">

            <svg class="tw-h-5 tw-w-5 tw-text-indigo-300 group-hover:tw-text-indigo-100"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "Login",
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            error: false
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        login() {
            this.signIn(this.form).then(() => {
                    this.$router.push({
                        name: 'home'
                    })
                }
            ).catch((e) => {
                    console.log(e)
                    this.form.email = ''
                    this.form.password = ''
                    this.error = true
                }
            )
        }
    }
}
</script>

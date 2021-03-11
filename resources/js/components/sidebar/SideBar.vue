<template>
    <aside
        class="tw-w-full lg:tw-w-56 xl:tw-w-64 xxl:tw-w-2/12 tw-bg-gray-100 tw-border-r tw-border-gray-300 lg:tw-overflow-hidden">
        <div class="lg:tw-flex tw-flex-col lg:tw-h-screen">
            <div
                class="tw-bg-gray-700 tw-shadow tw-relative tw-py-2 tw-pl-3 lg:tw-px-6 tw-h-12 tw-flex tw-items-center tw-justify-between">
                <a href="#" class="tw-text-gray-200 tw-block tw-w-32 tw-relative tw-z-30">Workout In Gym</a>
                <button type="button"
                        class="tw-rounded tw-outline-none tw-px-3 tw-py-2 tw-leading-none tw-text-white tw-shadow tw-bg-gray-800 tw-font-medium tw-mx-3 tw-text-sm xxl:tw-text-base hover:tw-bg-white hover:tw-text-yellow-100 lg:tw-hidden">
                    <span class="tw-block">Menu </span>

                    <span class="tw-hidden">Close </span>
                </button>
            </div>
            <nav
                class="lg:tw-h-0  tw-mx-auto tw-w-full tw-py-8 tw-px-6  tw-flex-1 md:tw-overflow-y-auto tw-custom-scrollbar tw-hidden lg:tw-block">
                <span
                    class="tw-uppercase tw-text-gray-500 tw-font-medium tw-text-xs tw-tracking-widest tw-block tw-mb-4">Main
                    navigation</span>
                <ul class="tw-mb-10 tw-text-sm xxl:tw-text-base">
                    <template v-for="(sidebarItem, index) in sidebarItems">
                        <sidebar-item ref="sidebarLink"
                                      :key="`sidebarItem-${index}`"
                                      v-if="!sidebarItem.submenu"
                                      :index="index"
                                      class="tw-mb-4"
                                      :to="sidebarItem.slug != 'external' ? sidebarItem.url : ''"
                                      :href="sidebarItem.slug == 'external' ? sidebarItem.url : ''"
                                      :icon="sidebarItem.icon"
                                      :target="sidebarItem.target"
                                      :isDisabled="sidebarItem.isDisabled"
                                      :slug="sidebarItem.slug">
                            {{ sidebarItem.name }}
                        </sidebar-item>
                        <template v-else>
                            <sidebar-group ref="sidebarGroup"
                                           :key="`group-${index}`"
                                           :group="sidebarItem"
                                           :groupIndex="index"
                            ></sidebar-group>
                        </template>
                    </template>
                    <li class="tw-mb-4">
                        <button v-on:click="logOut"
                                class="tw-text-gray-500 tw-flex tw-items-center hover:tw-text-gray-800">
                        <span class="tw-w-6 tw-block tw-text-sm xxl:tw-text-base">
                            <font-awesome-icon icon="sign-out-alt"/></span>
                            {{ $t('Logout') }}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
import sidebarItems from "./sidebarItems.js";
import SidebarItem from './SidebarItem';
import SidebarGroup from './SidebarGroup';

import {mapActions} from 'vuex'

export default {
    name: "SideBar",
    components: {SidebarGroup, SidebarItem},
    data: () => ({
        sidebarOpen: true,
        sidebarItems: sidebarItems,
    }),
    computed: {},
    methods: {
        ...mapActions({
            signOut: 'auth/signOut'
        }),
        logOut() {
            this.signOut().then(() => {
                    this.$router.replace({
                        name: 'pageLogin'
                    })
                }
            ).catch(() => {
                    console.log('sign out failed')
                }
            )
        }
    }
}
</script>

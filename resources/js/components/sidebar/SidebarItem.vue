<!-- =========================================================================================
    File Name: SidebarItem.vue
    Description: Sidebar item component.
    Component Name: SidebarItem
========================================================================================== -->
<template>
    <li>
        <router-link class="tw-text-gray-500 tw-flex tw-items-center hover:tw-text-gray-800"
                     v-if="to"
                     :to="to"
                     :class="[{'tw-text-gray-800 router-link-active': activeLink}]"
                     :target="target"
                     exact>
            <span v-if="icon!=''" class="tw-w-6 tw-block tw-text-sm xxl:tw-text-base">
                <font-awesome-icon v-if="icon" :icon="icon"/>
            </span>
            <slot></slot>
        </router-link>
    </li>
</template>

<script>
export default {
    name : 'SidebarItem',
    props : {
        icon : {
            default : "",
            type : String,
        },
        href : {
            default : '#',
            type : String,
        },
        to : {
            default : null,
            type : String,
        },
        slug : {
            default : null,
            type : String,
        },
        index : {
            default : null,
            type : [String, Number],
        },
        target : {
            default : '_self',
            type : String,
        },
        isDisabled : {
            default : false,
            type : Boolean,
        },
    },
    data(){
        return {
            activeLink : false,
        }
    },
    watch : {
        '$route'(){
            this.CheckIsActive()
        },
    },
    methods : {
        CheckIsActive(){
            if (this.to) {
                if (this.to == this.$route.path) {
                    this.activeLink = true
                } else {
                    this.activeLink = false
                }
                // if (this.$route.path.slice(1).includes(this.to.slice(1)) && this.to.slice(1)) this.activeLink = true
                // else this.activeLink = false
            }
        },
    },
    updated(){
        this.CheckIsActive();
    },
}
</script>

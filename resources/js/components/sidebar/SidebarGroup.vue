<!-- =========================================================================================
	File Name: SidebarGroup.vue
	Description: Sidebar Group Component.
	Component Name: SidebarGroup
========================================================================================== -->
<template>
    <li class="tw-mb-6"
        @mouseover="mouseover"
        @mouseout="mouseout">
        <a  @click="clickGroup" class="tw-text-gray-500 tw-flex tw-items-center tw-justify-between hover:text-gray-800 tw-cursor-pointer">
            <span class="tw-flex tw-items-center">
                <span class="tw-w-6 tw-block tw-text-sm xxl:tw-text-base">
                    <font-awesome-icon v-if="group.icon !=''" :icon="group.icon"/>
                </span>
                <span>{{ group.name }}</span></span>
            <span v-if="isGroupActive(group) || openItems">
                <font-awesome-icon icon="angle-down"/>
            </span>
            <span v-else>
                <font-awesome-icon icon="angle-up"/>
            </span>
        </a>
        <ul v-if="isGroupActive(group) || openItems" class="tw-pl-6 tw-text-sm xxl:tw-text-base tw-block">
            <template v-for="(groupItem, index) in group.submenu">
                <side-bar-list-item
                    :key="`${groupIndex}-sidebarItem-${index}`"
                    :index="`${groupIndex}-sidebarItem-${index}`"
                    class="tw-mt-3 tw-ml-5"
                    :to="groupItem.slug != 'external' ? groupItem.url : ''"
                    :href="groupItem.slug == 'external' ? groupItem.url : ''"
                    :target="groupItem.target"
                    :isDisabled="groupItem.isDisabled"
                    :slug="groupItem.slug">
                    {{ groupItem.name }}
                </side-bar-list-item>
            </template>
        </ul>
    </li>
</template>

<script>
import SideBarListItem from './SidebarItem';

export default {
    name : 'SidebarGroup',
    components : { SideBarListItem },
    props : {
        group : {
            type : Object,
        },
        groupIndex : {
            type : Number,
        },
    },
    data : ()=>({
        openItems : false,
    }),
    computed : {
        isGroupActive(){
            return (sidebarItem)=>{
                const path = this.$route.fullPath;
                let open = false;
                let func = function(sidebarItem){
                    if (sidebarItem.submenu) {
                        sidebarItem.submenu.forEach((item)=>{
                            if (path == item.url) {
                                open = true
                            } else if (item.submenu) {
                                func(item)
                            }
                        })
                    }
                }

                func(sidebarItem)
                return open
            }
        },
    },
    watch : {},
    methods : {
        clickGroup(){
            this.openItems = !this.openItems
        },
        mouseover(){

        },
        mouseout(){

        },
    },
    mounted(){
    },
}
</script>

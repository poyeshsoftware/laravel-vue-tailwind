<template>
    <div class="tw-bg-gray-100 tw-flex-1 tw-flex tw-flex-col lg:tw-flex-row">
        <side-bar></side-bar>
        <main class="tw-flex-1 tw-overflow-hidden">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import SideBar from '../../components/sidebar/SideBar';
import TopHeader from '../../components/TopHeader';

export default {
    components : { TopHeader, SideBar },
}
</script>

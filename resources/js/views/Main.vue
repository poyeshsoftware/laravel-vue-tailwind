<template>
    <div
        class="tw-px-3 sm:tw-px-4 xl:tw-px-6 xxl:tw-px-8 tw-pt-1 tw-mx-auto md:tw-overflow-y-scroll md:tw-h-screen tw-pb-24 tw-custom-scrollbar">
        <header
            class="tw-flex tw-justify-between tw-items-center md:tw-items-end tw-mb-4 md:tw-h-12 tw-pt-2 md:tw-pt-0">
            <div class="tw-flex">
                <h1 class="tw-text-xl tw-font-medium tw-mb-1">Dashboard</h1>
            </div>
        </header>
        <area-chart/>
        <div class="tw-flex tw-flex-wrap tw-border-b tw-border-gray-200 tw-py-6">

            <div class="tw-flex tw-flex-wrap tw--mx-4 -tw-mx-4 tw-w-full">
                <div class="tw-w-full lg:tw-w-1/4 tw-px-4 tw-mb-4 lg:tw-mb-0">
                    <div class="tw-h-full tw-border tw-rounded tw-shadow">
                        <div class="tw-flex tw-items-center tw-justify-between tw-py-3 px-4 tw-border-b">
                            <h3 class="tw-text-lg tw-font-semibold tw-font-heading">Income</h3>
                            <span
                                class="tw-py-1 tw-px-3 tw-text-sm tw-text-white tw-font-semibold tw-bg-green-500 tw-rounded-full">Monthly</span>
                        </div>
                        <div class="tw-flex tw-flex-col tw-p-4">
                            <h3 class="tw-text-3xl tw-mb-3 tw-font-semibold tw-font-heading tw-font-semibold">
                                2,200</h3>
                            <span>Total income</span>
                            <span class="tw-text-green-500">82%</span>
                        </div>
                    </div>
                </div>
                <div class="tw-w-full lg:tw-w-1/4 tw-px-4 tw-mb-4 lg:tw-mb-0">
                    <div class="tw-h-full tw-border tw-rounded tw-shadow">
                        <div class="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-3 tw-border-b">
                            <h3 class="tw-text-lg font-semibold font-heading">Orders</h3>
                            <span
                                class="tw-py-1 tw-px-3 tw-text-sm tw-text-white tw-font-semibold tw-bg-green-500 tw-rounded-full">Monthly</span>
                        </div>
                        <div class="tw-flex tw-flex-col tw-p-4">
                            <h3 class="tw-text-3xl tw-mb-3 tw-font-semibold tw-font-heading tw-font-semibold">
                                128,430</h3>
                            <span>New orders</span>
                            <span class="tw-text-green-500">32%</span>
                        </div>
                    </div>
                </div>
                <div class="tw-w-full lg:tw-w-1/4 tw-px-4 tw-mb-4 lg:tw-mb-0">
                    <div class="tw-h-full tw-border tw-rounded tw-shadow">
                        <div class="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-3 tw-border-b">
                            <h3 class="tw-text-lg font-semibold font-heading">Visits</h3>
                            <span
                                class="tw-py-1 tw-px-3 tw-text-sm tw-text-white tw-font-semibold tw-bg-green-500 tw-rounded-full">Monthly</span>
                        </div>
                        <div class="tw-flex tw-flex-col tw-p-4">
                            <h3 class="tw-text-3xl tw-mb-3 tw-font-semibold tw-font-heading tw-font-semibold">
                                81,248</h3>
                            <span>New visits</span>
                            <span class="tw-text-green-500">24%</span>
                        </div>
                    </div>
                </div>
                <div class="tw-w-full lg:tw-w-1/4 tw-px-4 tw-mb-4 lg:tw-mb-0">
                    <div class="tw-h-full tw-border tw-rounded tw-shadow">
                        <div class="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-3 tw-border-b">
                            <h3 class="tw-text-lg tw-font-semibold tw-font-heading">Conversions</h3>
                            <span
                                class="tw-py-1 tw-px-3 tw-text-sm tw-text-white tw-font-semibold tw-bg-red-500 tw-rounded-full">Today</span>
                        </div>
                        <div class="tw-flex tw-flex-col tw-p-4">
                            <h3 class="tw-text-3xl tw-mb-3 tw-font-semibold tw-font-heading tw-font-semibold">
                                7%</h3>
                            <span>Purchased more than once</span>
                            <span class="tw-text-red-500">82%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AreaChart from "../components/charts/AreaChart";

export default {
    name: "",
    components: {AreaChart},
    data() {
        return {}
    },
}
</script>

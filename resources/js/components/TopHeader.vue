<template>
    <div class="tw-relative tw-bg-white">
        <div class="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6">
            <div class="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-gray-100 tw-py-6 md:tw-justify-start md:tw-space-x-10">
                <div class="lg:tw-w-0 lg:tw-flex-1">
                    <a href="#" class="tw-flex">
                        <img class="tw-h-8 tw-w-auto sm:tw-h-10"
                             src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                             alt="Workflow">
                    </a>
                </div>
                <div class="-tw-mr-2 -tw-my-2 md:tw-hidden">
                    <button type="button"
                            class="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 focus:tw-text-gray-500 tw-transition tw-duration-150 tw-ease-in-out">
                        <!-- Heroicon name: menu -->
                        <svg class="tw-h-6 tw-w-6"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
                <nav class="tw-hidden md:tw-flex tw-space-x-10">
                    <a href="#"
                       class="tw-text-base tw-leading-6 tw-font-medium tw-text-gray-500 hover:tw-text-gray-900 focus:tw-outline-none focus:tw-text-gray-900 tw-transition tw-ease-in-out tw-duration-150">
                        Menu 1
                    </a>
                    <a href="#"
                       class="tw-text-base tw-leading-6 tw-font-medium tw-text-gray-500 hover:tw-text-gray-900 focus:tw-outline-none focus:tw-text-gray-900 tw-transition tw-ease-in-out tw-duration-150">
                        Menu 2
                    </a>
                </nav>
                <div class="tw-hidden md:tw-flex tw-items-center tw-justify-end tw-space-x-8 md:tw-flex-1 lg:tw-w-0">
                    <a href="#"
                       class="tw-whitespace-no-wrap tw-text-base tw-leading-6 tw-font-medium tw-text-gray-500 hover:tw-text-gray-900 focus:tw-outline-none focus:tw-text-gray-900">
                        Sign in
                    </a>
                    <span class="tw-inline-flex tw-rounded-md tw-shadow-sm">
                        <a href="#"
                           class="tw-whitespace-no-wrap tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-border tw-border-transparent tw-text-base tw-leading-6 tw-font-medium tw-rounded-md tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-500 focus:tw-outline-none focus:tw-border-indigo-700 focus:tw-shadow-outline-indigo active:tw-bg-indigo-700 tw-transition tw-ease-in-out tw-duration-150">
                            Sign up
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <!--
          Mobile menu, show/hide based on mobile menu state.

          Entering: "duration-200 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div class="tw-absolute top-0 tw-inset-x-0 p-2 tw-transition tw-transform tw-origin-top-right md:tw-hidden">
            <div class="tw-rounded-lg tw-shadow-lg">
                <div class="tw-rounded-lg tw-shadow-xs tw-bg-white tw-divide-y-2 tw-divide-gray-50">
                    <div class="tw-pt-5 tw-pb-6 tw-px-5 tw-space-y-6">
                        <div class="tw-flex tw-items-center tw-justify-between">
                            <div>
                                <img class="tw-h-8 tw-w-auto"
                                     src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                                     alt="Workflow">
                            </div>
                            <div class="-tw-mr-2">
                                <button type="button"
                                        class="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 focus:tw-text-gray-500 tw-transition tw-duration-150 tw-ease-in-out">
                                    <!-- Heroicon name: x -->
                                    <svg class="tw-h-6 tw-w-6"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <nav class="tw-grid tw-gap-y-8">
                                <a href="#"
                                   class="-tw-m-3 tw-p-3 tw-flex tw-items-center tw-space-x-3 tw-rounded-md hover:tw-bg-gray-50 tw-transition tw-ease-in-out tw-duration-150">
                                    <!-- Heroicon name: chart-bar -->
                                    <svg class="tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-indigo-600"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                    </svg>
                                    <div class="tw-text-base tw-leading-6 tw-font-medium tw-text-gray-900">
                                        Menu 1
                                    </div>
                                </a>
                                <a href="#"
                                   class="-tw-m-3 tw-p-3 tw-flex tw-items-center tw-space-x-3 tw-rounded-md hover:tw-bg-gray-50 tw-transition tw-ease-in-out tw-duration-150">
                                    <!-- Heroicon name: cursor-click -->
                                    <svg class="tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-indigo-600"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                                    </svg>
                                    <div class="tw-text-base tw-leading-6 tw-font-medium tw-text-gray-900">
                                        Menu 2
                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div class="tw-py-6 tw-px-5 tw-space-y-6">
                        <div class="tw-grid tw-grid-cols-2 tw-gap-y-4 tw-gap-x-8">
                            <a href="#"
                               class="tw-text-base tw-leading-6 tw-font-medium tw-text-gray-900 hover:tw-text-gray-700 tw-transition tw-ease-in-out tw-duration-150">
                                Other Menu 1
                            </a>
                            <a href="#"
                               class="tw-text-base tw-leading-6 tw-font-medium tw-text-gray-900 hover:tw-text-gray-700 tw-transition tw-ease-in-out tw-duration-150">
                                Other Menu 2
                            </a>
                        </div>
                        <div class="space-y-6">
                            <span class="tw-w-full tw-flex tw-rounded-md tw-shadow-sm">
                                <a href="#"
                                   class="tw-w-full tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-border tw-border-transparent tw-text-base tw-leading-6 tw-font-medium tw-rounded-md tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-500 focus:tw-outline-none focus:tw-border-indigo-700 focus:tw-shadow-outline-indigo active:tw-bg-indigo-700 tw-transition tw-ease-in-out tw-duration-150">
                                    Sign up
                                </a>
                            </span>
                            <p class="tw-text-center tw-text-base leading-6 tw-font-medium tw-text-gray-500">
                                Existing customer?
                                <a href="#"
                                   class="tw-text-indigo-600 hover:tw-text-indigo-500 tw-transition tw-ease-in-out tw-duration-150">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "TopHeader",
    data : ()=>({
        mobileMenuOpen : false,
    }),
}
</script>

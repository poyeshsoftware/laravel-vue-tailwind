/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Structure:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
==========================================================================================*/
export default [
    {
        url: '/',
        name: "Dashboard",
        slug: "dashboard",
        icon: "home",
    },
    // {
    //   header: "Exercises & Category",
    // },
    {
        url: null,
        name: "Manage Documents",
        icon: "list",
        submenu: [
            {
                url: '/categories',
                slug: "categories",
                name: "Categories",
            },
            {
                url: '/books',
                slug: "books",
                name: "Books",
            },
        ],
    }
]

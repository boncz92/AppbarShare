import { ClipboardList, DatabaseZap, House, Wrench, Headset } from "lucide-react";

/*
#################Example Navigation Collapsible
    {
        title: '',
        url: '',
        icon: '',
        requiredViewss: [],
        menus: [
            {
                title: '',
                icon: '',
                items: [
                    {
                        title: '',
                        url: '',
                        requiredViewss: [],
                    }
                ]
            }
        ]
    },

#################Example Navigation Item
    {
        title: '',
        url: '',
        icon: '',
        requiredViewss: [],
    },
*/


function createTitleMap(navigationMenu) {
    const titleMap = new Map();
    titleMap.set('/int/home', 'Home');

    function processMenuItems(items) {
        items.forEach(item => {
            // If item has a direct URL, add it to the map
            if (item.url) {
                titleMap.set(item.url, item.title);
            }

            // If item has nested menus, process them
            if (item.menus) {
                item.menus.forEach(submenu => {
                    if (submenu.items) {
                        processMenuItems(submenu.items);
                    }
                });
            }

            // If item has direct items, process them
            if (item.items) {
                processMenuItems(item.items);
            }
        });
    }

    // Start processing from the root menu
    processMenuItems(navigationMenu);

    return Object.fromEntries(titleMap);
}

function getConfigNavigationMenu() {
    return [
        {
            title: 'Home',
            url: '/',
            icon: House,
            requiredViews: ['*'],
        },
        {
            title: 'Service Desk Tool',
            url: '/int/service-desk-tool',
            icon: Headset,
            requiredViews: ['IAM', 'SD', 'Super',],
        },
        {
            title: 'ISIM',
            menus: [
                {
                    title: 'Reports',
                    icon: ClipboardList,
                    items: [
                        {
                            title: 'Direct Reports',
                            url: '/int/isim/personlookup/directreports',
                            requiredViews: ['IAM', 'IdentityLookup', 'DirectReports'],
                        },
                        {
                            title: 'Pseudo ID Report',
                            url: '/int/isim/reports/PseudoIDs',
                            requiredViews: ['IAM'],
                        },
                        {
                            title: 'RTS Config',
                            url: '/int/isim/rtsconfig',
                            requiredViews: ['IAM'],
                        },
                        {
                            title: 'Workforce Distribution',
                            url: '/int/reporting/workforce-distribution-report',
                            requiredViews: ['IAM', 'ResolverTeam'],
                        },
                        {
                            title: 'Imprivata Tracking',
                            url: '/int/reporting/imprivata-stats',
                            requiredViews: ['IAM'],
                        },
                        {
                            title: 'Unmanaged Group List',
                            url: '/int/isim/reports/unmanagedpolicy',
                            requiredViews: ['IAM', 'IdentityLookup'],
                        },
                        {
                            title: "Sponsored Office Staff",
                            url: "/int/reporting/sponsored-users",
                            requiredViews: ['OfficeStaff', 'ResolverTeam']
                        },
                        {
                            title: "All Users",
                            url: "/int/reporting/active-users",
                            requiredViews: ['IAM', 'IdentityLookup']
                        }
                    ]
                },
                {
                    title: 'Tools',
                    icon: Wrench,
                    items: [
                        {
                            title: "Identity Lookup",
                            url: "/int/isim/personlookup",
                            requiredViews: ['IdentityLookup', 'IAM']
                        },
                        {
                            title: "Direct Reports Lookup",
                            url: "/int/isim/directreportslookup",
                            requiredViews: ['IdentityLookup', 'IAM']
                        },
                        {
                            title: "Role Mapping Master",
                            url: "/int/isim/tools/rmm",
                            requiredViews: ['ResolverTeam', 'IAM']
                        },
                        {
                            title: "Tappy Tool",
                            url: "/int/isim/tools/tapidentities",
                            requiredViews: ['IAM']
                        },
                        {
                            title: "Pseudo Identity Creator",
                            url: "/int/isim/tools/createpseudoidentity",
                            requiredViews: ['IAM']
                        },
                        {
                            title: "Priv Access Comparinator",
                            url: "/int/isim/tools/priv-access-comparinator",
                            requiredViews: ['IAM']
                        },
                    ]
                },
                {
                    title: 'Assembly Lines',
                    icon: DatabaseZap,
                    items: [
                        {
                            title: "sProvider Feed",
                            url: "/int/isim/tools/runsprovider",
                            requiredViews: []
                        },
                        {
                            title: "Infor Feed",
                            url: "/int/isim/tools/runinfor",
                            requiredViews: []
                        },
                        {
                            title: "NE Feed",
                            url: "/int/isim/tools/run-ne-feed",
                            requiredViews: []
                        },
                    ]
                }
            ]
        },
        {
            title: 'Event Management',
            menus: [
                {
                    title: 'Production',
                    icon: ClipboardList,
                    items: [
                        {
                            title: "Source View",
                            url: "/int/eventmgmt/source",
                            requiredViews: ['IAM']
                        },
                        {
                            title: "Recent Tickets",
                            url: "/int/eventmgmt/recent_tickets",
                            requiredViews: ['IAM']
                        },
                        {
                            title: "Active Actions",
                            url: "/int/eventmgmt/activeactions",
                            requiredViews: ['IAM']
                        }
                    ]
                },
                {
                    title: 'Development',
                    icon: ClipboardList,
                    items: [
                        {
                            title: "Source View",
                            url: "/int/eventmgmt/source?env=dev",
                            requiredViews: ['IAM']
                        },
                        {
                            title: "Recent Tickets",
                            url: "/int/eventmgmt/recent_tickets?env=dev",
                            requiredViews: ['IAM']
                        }
                    ]
                }
            ]
        },
        {
            title: 'Administrative',
            menus: [
                {
                    title: 'Tools',
                    icon: Wrench,
                    items: [
                        {
                            title: "Login As",
                            url: "/int/admin/loginas",
                            requiredViews: [],
                        },
                        {
                            title: "JsonParser",
                            url: "/int/tools/json",
                            requiredViews: [],
                        },
                        {
                            title: "JsonParser Prod",
                            url: "/int/tools/jsonP",
                            requiredViews: [],
                        },
                        {
                            title: "JsonParser Dev",
                            url: "/int/tools/jsonD",
                            requiredViews: [],
                        },
                        {
                            title: "Image Cropper",
                            url: "/int/tools/cropper-9000",
                            requiredViews: ['IAM', 'SD', 'Super'],
                        },
                    ]
                }
            ]
        },
    ];
}

export const config_navigationMenu = getConfigNavigationMenu();
export const config_titleMap = createTitleMap(config_navigationMenu);

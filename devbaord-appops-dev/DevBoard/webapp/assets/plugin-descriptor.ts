import { PluginDescriptor } from './plugin-descriptor.slim';

export var pluginDescriptor:Array<PluginDescriptor> = [

    // {
    //     plugin: "Jobs",
    //     display: "JOBS",
    //     bundlePath: "/assets/plugins/job-view-plugin.js",
    //     route: "jobs",
    //     icon: "work",
    //     children: [
    //         { display: 'Active Jobs', route: 'jobs/activeJobs' },
    //         { display: 'Configured Jobs', route: 'jobs/configuredJobs' }
    //     ]
    // },
    {
        plugin: "Services",
        display: "SERVICES",
        bundlePath: "/assets/plugins/service-plugin.js",
        route: "services",
        icon: "design_services",
        children: []
    },
    {
        plugin: "Logs",
        display: "LOGS",
        bundlePath: "/assets/plugins/log-viewer-plugin.js",
        route: "logs",
        icon: "description",
        children: [
            { display: 'Log Settings', route: ''}
        ]
    },
    // {
    //     plugin: "Deployment",
    //     display: "DEPLOYMENT",
    //     bundlePath: "/assets/plugins/deployment-plugin.js",
    //     route: "deployment",
    //     icon: "developer_board",
    //     children: []
    // },
    {
        plugin: "Blobs",
        display: "BLOBS",
        bundlePath: "/assets/plugins/blob-plugin.js",
        route: "blobs",
        icon: "collections",
        children: []
    },
    {
        plugin: "Settings",
        display: "SETTINGS",
        bundlePath: "/assets/plugins/setting-plugin.js",
        route: "settings",
        icon: "settings",
        children: []
    },
    {
        plugin: "Users",
        display: "USERS",
        bundlePath: "/assets/plugins/user-admin-plugin.js",
        route: "user",
        icon: "face",
        children: []
    },
    {
        plugin: "APP STORE",
        display: "APP STORE",
        bundlePath: "/assets/plugins/app-store-plugin.js",
        route: "app",
        icon: "widgets",
        children: []
    },
    {
        plugin: "Projects",
        display: "PROJECTS",
        bundlePath: "/assets/plugins/project-manager-plugin.js",
        route: 'project',
        icon: 'source',
        children: []
    },
    {
        plugin: "Scheduler",
        display: "SCHEDULER",
        bundlePath: "/assets/plugins/scheduler-plugin.js",
        route: "scheduler",
        icon: "calendar_today",
        children: [
                    { display: 'Completed Jobs', route: 'scheduler/completedJobs'},
                    { display: 'InProgress Jobs', route: 'scheduler/inProgressJobs' },
                    { display: 'Pending Jobs', route: 'scheduler/pendingJobs' },
                    { display: 'Failed Jobs', route: 'scheduler/failedJobs' }
                ]
    },
    /*{  //Temporary added data
        plugin: "Projects",
        display: "ABC",
        bundlePath: '/assets/plugins/project-manager-plugin.js',
        route: 'project',
        icon: 'try',
        children: []
    },
    {
        plugin: "Projects",
        display: "PQR",
        bundlePath: '/assets/plugins/project-manager-plugin.js',
        route: 'project',
        icon: 'source',
        children: []
    },
    {
        plugin: "Projects",
        display: "LMN",
        bundlePath: '/assets/plugins/project-manager-plugin.js',
        route: 'project',
        icon: 'build',
        children: []
    },
    {
        plugin: "Projects",
        display: "DEF",
        bundlePath: '/assets/plugins/project-manager-plugin.js',
        route: 'project',
        icon: 'language',
        children: []
    },
    {
        plugin: "Projects",
        display: "XYZ",
        bundlePath: '/assets/plugins/project-manager-plugin.js',
        route: 'project',
        icon: 'update',
        children: []
    },{
        plugin: "Projects",
        display: "AB",
        bundlePath: '/assets/plugins/project-manager-plugin.js',
        route: 'project',
        icon: 'pending',
        children: []
    },
    // {
    //     plugin: "Projects",
    //     display: "PQ",
    //     bundlePath: '/assets/plugins/project-manager-plugin.js',
    //     route: 'project',
    //     icon: 'source',
    //     children: []
    // },
    // {
    //     plugin: "Projects",
    //     display: "EF",
    //     bundlePath: '/assets/plugins/project-manager-plugin.js',
    //     route: 'project',
    //     icon: 'source',
    //     children: []
    // },*/
    
]
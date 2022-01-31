export class PluginDescriptor {

    plugin: string;
    display: string;
    bundlePath: string;
    route: string;
    icon: string;
    children: Array<Children>;
}

export class Children {
    display: string;
    route: string;
    settingRoute?: string;
}
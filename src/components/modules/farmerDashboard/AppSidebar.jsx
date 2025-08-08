import React from "react"

import {
    IconChartBar,
    IconDashboard,
    IconFolder,
    IconInnerShadowTop,
    IconListDetails,
    IconUsers,
} from "@tabler/icons-react"

import {
    Home,
    Truck,
    LineChart,
    TreeDeciduous,
    Users,
    ExternalLink,
    Activity,
    Calendar,
    Smartphone
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import NavMain from "./NavMain"
import NavUser from "./NavUser"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        { title: "Dashboard", url: "#", icon: Home },
        { title: "Rantai Pasok", url: "#", icon: Truck },
        { title: "Ekonomi", url: "#", icon: LineChart },
        { title: "Lingkungan", url: "#", icon: TreeDeciduous },
        { title: "Sosial", url: "#", icon: Users },
        { title: "External", url: "#", icon: ExternalLink },
        { title: "Prediksi", url: "#", icon: Activity },
        { title: "Kalender Tanam", url: "#", icon: Calendar },
        { title: "Layanan Digital", url: "#", icon: Smartphone },
    ],
};

const AppSidebar = () => {
    return (
        <Sidebar collapsible="offcanvas">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-5"
                        >
                            <a href="#">
                                <IconInnerShadowTop className="!size-5" />
                                <span className="text-base uppercase font-semibold">Dashboard Petani</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar
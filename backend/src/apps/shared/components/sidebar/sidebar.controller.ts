import BarsIcon from "../icons/Bars";
import CalendarIcon from "../icons/Calendar";
import FolderIcon from "../icons/Folder";
import HomeIcon from "../icons/Home";
import InboxIcon from "../icons/Inbox";
import UsersIcon from "../icons/Users";

interface INavigation {
    name: string;
    href: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    current: boolean;
}

class SidebarComponentController {
    public readonly navigation: INavigation[] = [
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Team', href: '#', icon: UsersIcon, current: false },
        { name: 'Projects', href: '#', icon: FolderIcon, current: false },
        { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
        { name: 'Documents', href: '#', icon: InboxIcon, current: false },
        { name: 'Reports', href: '#', icon: BarsIcon, current: false },
      ];
}

export default new SidebarComponentController();
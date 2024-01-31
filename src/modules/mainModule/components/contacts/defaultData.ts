import vkLogo from "@/shared/assets/svg/vk.svg";
import instLogo from "@/shared/assets/svg/instagram.svg";
import phoneLogo from "@/shared/assets/svg/phone.svg";
import tgLogo from "@/shared/assets/svg/telegram.svg";

export interface IAllContacts {
    link: `https://${string}` | `http://${string}` | `tel:${string}`;
    name: string;
    imgSrc: string;
}

export const allContacts: IAllContacts[] = [
    {
        link: "https://vk.com/silk_way_vrn",
        name: "Паблик в ВК",
        imgSrc: vkLogo
    },
    {
        link: "https://www.instagram.com/silk.way.vrn?igsh=ZDE1MWVjZGVmZQ==",
        name: "Страница в Инстаграм",
        imgSrc: instLogo
    },
    {
        link: "https://t.me/silkwayvrn",
        name: "Телеграм канал",
        imgSrc: tgLogo
    },
    {
        link: "tel:+7(900)962-47-41",
        name: "+7 (900) 962-47-41",
        imgSrc: phoneLogo
    }
];

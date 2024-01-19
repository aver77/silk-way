import { StaticImageData } from "next/image";
import { ProductTypes } from "@/shared/data/enums";

import bMudan from "@/shared/assets/img/teas/bMudan.png";
import shouMei from "@/shared/assets/img/teas/shouMei.png";
import baoHaoIn from "@/shared/assets/img/teas/baoHaoIn.png";
import yaBao from "@/shared/assets/img/teas/yaBao.png";
import anciBayCha from "@/shared/assets/img/teas/anciBayCha.png";
import lunTcin from "@/shared/assets/img/teas/lunTcin.png";
import maoTcyan from "@/shared/assets/img/teas/maoTcyan.png";
import tcinTcynMay from "@/shared/assets/img/teas/tcinTcynMay.png";
import danHunMaofen from "@/shared/assets/img/teas/danHunMaofen.png";
import daCinJen from "@/shared/assets/img/teas/daCinJen.png";
import danHynCynCjen from "@/shared/assets/img/teas/danHynCynCjen.png";
import teGuanIn from "@/shared/assets/img/teas/teGuanIn.png";
import aliashan from "@/shared/assets/img/teas/alishan.png";
import dunDin from "@/shared/assets/img/teas/dunDin.png";
import foShoy from "@/shared/assets/img/teas/foShoy.png";
import joyGoy from "@/shared/assets/img/teas/joyGoy.png";
import daHynPao from "@/shared/assets/img/teas/daHynPao.png";
import shyiTcan from "@/shared/assets/img/teas/shyiTcan.png";
import fenHuanDanCyn from "@/shared/assets/img/teas/fenHuanDanCyn.png";
import gabaAlishan from "@/shared/assets/img/teas/gabaAlishan.png";
import gabaDunDin from "@/shared/assets/img/teas/gabaDunDin.png";
import gabaRed from "@/shared/assets/img/teas/gabaRed.png";
import gabaHoney from "@/shared/assets/img/teas/gabaHoney.png";
import shyPuer from "@/shared/assets/img/teas/shyPuer.png";
import shenPuer from "@/shared/assets/img/teas/shenPuer.png";

import hookahSrc from "@/shared/assets/img/hookahImg.png";

export interface IProduct {
    title: string;
    src: StaticImageData;
    description: string;
    price: string;
    filter?: string;
}

const whiteFilter = "Белый";
const greenFilter = "Зелёный";
const redFilter = "Красный";
const ulunsLight = "Улуны светлые";
const ulunsDark = "Улуны тёмные";
const gabaTea = "Габа чай";
export const teaFilters = [whiteFilter, greenFilter, redFilter, ulunsLight, ulunsDark, gabaTea];

export const defaultTeas: IProduct[] = [
    {
        title: "Бай Му Дань",
        src: bMudan,
        description:
            "Является мощным антиоксидантом, очищает организм и укрепляет сердечно-сосудистую систему.",
        price: "170₽ / 10гр",
        filter: whiteFilter
    },
    {
        title: "Шоу мэй",
        src: shouMei,
        description:
            "Этот чай выращивается в горах Фуцзянь. Идеально подходит для тех, кто только начинает знакомиться с белым чаем, так как имеет яркие вкусовые нотки и обладает всеми полезными и благородными свойствами белого чая - прекрасно утоляет жажду, улучшает состояние кожи, останавливает старение клеток, способствует долголетию.",
        price: "150₽ / 10гр",
        filter: whiteFilter
    },
    {
        title: "Бай Хао Инь Чжэнь",
        src: baoHaoIn,
        description:
            "Чай выращивается в провинции Фуцзянь. Настою присущ светло-золотистый цвет, бархатистый аромат. По вкусу этот чай напоминает мёд.",
        price: "190₽ / 10гр",
        filter: whiteFilter
    },
    {
        title: "Я Бао",
        src: yaBao,
        description:
            "Пуэрные почки собираются с пуэрных деревьев в провинции Юннань. Настой светлого цвета с нежным цветочно-весенним вкусом и тонким ароматом.",
        price: "120₽ / 10гр",
        filter: whiteFilter
    },
    {
        title: "Аньцзи Байча",
        src: anciBayCha,
        description:
            "Приятный во вкусе, нежный и тонкий в аромате, чай прекрасно освежает восприятие, мягко тонизирует и заряжает энергией на весь день. Отличный утренний энергетик с пользой для здоровья.",
        price: "200₽ / 10гр",
        filter: greenFilter
    },
    {
        title: "Лун Цзин",
        src: lunTcin,
        description:
            "Высококачественный чай Лун Цзин из провинции Чжэцзян. Настой золотисто-зелёного цвета со сладковатым насыщенным вкусом без горечи и ароматом с цветочными и ореховыми нотами.",
        price: "110₽ / 10гр",
        filter: greenFilter
    },
    {
        title: "Мао Цзянь",
        src: maoTcyan,
        description:
            '"Ворсистые лезвия" - знаменитый зеленый китайский чай из провинции Хэнань. Самобытный, вкусный и особенный, он точно придется по вкусу ценителям благородного и нетривиального вкуса.',
        price: "100₽ / 10гр",
        filter: greenFilter
    },
    {
        title: "Цзинь Цзю Мэй",
        src: tcinTcynMay,
        description:
            "Редкий и удивительно вкусный чай из региона Уи (провинция Фуцзянь). Чай традиционно готовится методом ручной обработки. Сладковатый  медово-карамельный вкус,  постепенно переходит во фруктово-ягодный.",
        price: "160₽ / 10гр",
        filter: redFilter
    },
    {
        title: "Дян Хун Мао Фен",
        src: danHunMaofen,
        description:
            "Чай из провинции Юннань, с большим содержанием чайных почек. Он имеет фруктовый пряный аромат и вкус сухофруктов в сочетании с характерной для черных чаев терпкой ноткой. Выдерживает несколько заварок.",
        price: "70₽ / 10гр",
        filter: redFilter
    },
    {
        title: "Да Цзинь Чжень",
        src: daCinJen,
        description:
            "Этот чай относится к семейству Дянь Хунов и в классификации сортности занимает самый высокий ранг. Приготовлен он из ранневесеннего сырья, собранного высоко в горах. Мастерская, деликатная обработка позволили подчеркнуть в чае лучшие качества, которыми наградила его природа.",
        price: "250₽ / 10гр",
        filter: redFilter
    },
    {
        title: "Дянь хун сун чжень",
        src: danHynCynCjen,
        description:
            'Яркий, сочный и невероятно ароматный Дянь Хун был приготовлен из весеннего урожая, собранного в округе Пуэр. Однородное и красивое сырье - почка с листиком, как и положено высококлассным, качественным "Сосновым иглам".',
        price: "100₽ / 10гр",
        filter: redFilter
    },
    {
        title: "Улун Те Гуанинь",
        src: teGuanIn,
        description:
            "Приятный повседневный чай с благоухающим букетом, мягким вкусом и сочным, долгим, освежающим послевкусием. Идеален как для начала, так и для завершения продуктивного и насыщенного дня.",
        price: "120₽ / 10гр",
        filter: ulunsLight
    },
    {
        title: "Улун Алишань",
        src: aliashan,
        description:
            "Совершенно необыкновенный улун! По-весеннему воздушен, лёгок, свеж. У чая природный цветочно-сливочный аромат, присущий только тайваньскому гаошаню.",
        price: "150₽ / 10гр",
        filter: ulunsLight
    },
    {
        title: "Улун Дун Дин",
        src: dunDin,
        description:
            "Аромат настоя нежный, упоительный, теплый и утонченный. Во вкусе каскад оттенков, мягкость, благородство улунов во всей красе. А послевкусие оставляет долгий отпечаток с нотками ягод и цитрусовой кислинки. Сочно, многогранно и освежающе. В лучших традициях Тайваня.",
        price: "160₽ / 10гр",
        filter: ulunsLight
    },
    {
        title: "Улун Фо шоу",
        src: foShoy,
        description:
            "Улун средней ферментации из провинции Фуцзянь, Китай. Яркий представитель УИшаньских улунов. Мягкий вкус, обладает цветочно-фруктовыми нотами, имеет медовый аромат сухофруктов и оставляет долгое сладкое послевкусие.",
        price: "120₽ / 10гр",
        filter: ulunsLight
    },
    {
        title: "Улун Жоу Гуй",
        src: joyGoy,
        description:
            "«Корица» - темный улун, один из наиболее известных представителей Уишаня. Для данного сорта характерен упругий и сочный лист, что очень положительно сказывается на процесс многократной скрутки и сильного прогрева. Благодаря такой выделке чай приобретает невероятный, волшебный аромат и сильный, яркий вкус.",
        price: "190₽ / 10гр",
        filter: ulunsDark
    },
    {
        title: "Улун Да Хун Пао",
        src: daHynPao,
        description:
            "Один из самых популярных китайских сортов в мире! В меру пропечен, раскрывается жареным тостом, цветами и сухофруктами.",
        price: "180₽ / 10гр",
        filter: ulunsDark
    },
    {
        title: "Улун Шуй Сянь",
        src: shyiTcan,
        description:
            "Шуй Сянь обладает тонизирующим эффектом, отлично согревает, разгоняет кровь и поднимает общий жизненный тонус. Чай жёсткий, брутальный, напористый, со сложным букетом аромата и вкуса, переходящим в яркое фруктовое послевкусие.",
        price: "120₽ / 10гр",
        filter: ulunsDark
    },
    {
        title: "Улун Фен Хуан Дань Цун",
        src: fenHuanDanCyn,
        description:
            "Выращивается в городе Чаочжоу, провинция Гуандун. Насыщенный аромат этого чая с глубокими древесными нотками и маслянистым прожаренным оттенком. Вкус яркий, медово-цветочный, травянистый.",
        price: "100₽ / 10гр",
        filter: ulunsDark
    },
    {
        title: "Улун ГАБА Алишань",
        src: gabaAlishan,
        description:
            "Чай Габа Алишань красная можно отнести к элитным сортам улуна. Название чая произошло от разновидности чайного куста, выведенной в горах Алишань (округ Наньтхоу, Тайвань). При заваривании получается прекрасный напиток с ярким, чуть сладковатым вкусом с молочными ноткам, кислинкой и свежим цветочным ароматом.",
        price: "120₽ / 10гр",
        filter: gabaTea
    },
    {
        title: "Улун ГАБА Дун Дин",
        src: gabaDunDin,
        description:
            "Дун Дин – это название горы на Тайване, которое переводится как «Морозный пик». Там и собирают самое качественное сырье для улуна ГАБА. Палитра цвета настоя – от коньячного до насыщенного красного, во вкусе ощущается легкая кислинка и сладость, которая сохраняется и в долгом послевкусии, и при последующих проливах.",
        price: "120₽ / 10гр",
        filter: gabaTea
    },
    {
        title: "Улун ГАБА Красная",
        src: gabaRed,
        description:
            "Красный тайваньский чай, приготовленный по технологии ГАБА-чаев, с повышенным содержанием гамма-аминомасляной кислоты. Внешний вид – крупные, туго скрученные узелки с черенком, красновато-бурого оттенка. Аромат сухого чая мягкий, тонкий, нежный, фруктово-ягодный, чуть пряный. Настой яркий, чистый, цвета красного винограда.",
        price: "160₽ / 10гр",
        filter: gabaTea
    },
    {
        title: "Улун ГАБА Медовая",
        src: gabaHoney,
        description:
            "Сильно-ферментированный улун родом с острова Тайвань, собранный в районе Мей Шань. Это сладкий чай с медовым вкусом. Однако он не приторный, а, напротив, легкий и нежный. Во вкусе обычно можно различить цветочные и травянистые нотки.",
        price: "120₽ / 10гр",
        filter: gabaTea
    },
    {
        title: "Шу Пуэр",
        src: shyPuer,
        description:
            "Бодрящий и согревающий чёрный чай с юга Китая. Аромат шу пуэра богат древесными, сливочными, ореховыми, минеральными или камфорными оттенками. Вкус мягкий, бархатный. Помогает сконцентрироваться и дарит вдохновение.",
        price: "от 60₽ / 10гр",
        filter: redFilter
    },
    {
        title: "Шэн Пуэр",
        src: shenPuer,
        description:
            "Это «зёленый» пуэр, который получают пропариванием, прессовкой и сушкой чая-сырца. Молодой шэн чаще всего обладает яркими, цветочными, сухофруктовыми вкусом и ароматом, а более зрелые — глубокими, приглушенными и мягкими нотами.",
        price: "от 60₽ / 10гр",
        filter: greenFilter
    }
];

export const defaultHookah = [
    {
        title: "Стандарт на 2 дня",
        src: hookahSrc,
        description:
            'Комплект "Стандарт", но при условии заказа на 2 суток или более. Хороший выбор для желающих сэкономить 20% суммы. Кальяны Кальян 7 Star TH-11 Nurburgrin, TECHNO.\n' +
            "Дополнительно можно укомплектовать заказ всем необходимым для курения: плитка для углей, щипцы, калауд, мундштуки от 3 шт., угли от 6 шт. и тд, а также доставить кальян на дом.",
        price: "от 400₽"
    },
    {
        title: "Стандарт на сутки",
        src: hookahSrc,
        description:
            "Кальяны 7 Star TH-11 Nurburgrin, TECHNO. Этот класс каляьнов подают в специализированных кальнных заведениях. Отличное качество удовлетворит потребности как начинающих, так и опытных любителей дыма. \n" +
            "Дополнительно можно укомплектовать заказ всем необходимым для курения: плитка для углей, щипцы, калауд, мундштуки от 3 шт., угли от 6 шт. и т.д, а также доставить кальян на дом.",
        price: "от 600₽"
    }
];

export const getProducts = (productType: ProductTypes): IProduct[] => {
    switch (productType) {
        case ProductTypes.TEA: {
            return defaultTeas;
        }
        case ProductTypes.HOOKAH: {
            return defaultHookah;
        }
        default: {
            return [];
        }
    }
};

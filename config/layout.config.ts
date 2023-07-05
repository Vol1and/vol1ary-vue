import {ROUTE} from "@/routes";
import {ISidebarTree} from "@/types";

export const SIDEBAR_TREE: ISidebarTree[] = [
    {
        title: 'Главное',
        links: [
            {icon: 'list', label:'Отчеты', link: ROUTE.RECORDS.slug},
            {icon: 'rectangleList', label:'Недельные', link: ROUTE.WEEKS.slug},
            {icon: 'signal', label:'Спринты', link: ROUTE.SPRINTS.slug},
        ]
    },
    {
        title: 'Спорт',
        links: [
            {icon: 'dumbbell', label: 'Тренировки', link: ROUTE.WORKOUT.slug},
        ]
    },
    {
        title: 'Настройки',
        links: [
            {icon: 'gears', label: 'Упражнения', link: ROUTE.EXERCISES.slug},
            {icon: 'penToSquare', label:'Трекеры', link: ROUTE.TRACKERS.slug},
        ]
    }
]

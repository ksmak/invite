const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
    await prisma.invitationCategory.deleteMany();

    await prisma.invitationCategory.create({
        data: {
            category: 'birthday',
            name_kz: 'Туған күн (Мерейтой)',
            name_ru: 'День рождения (Юбилей)',
            name_en: 'Birthday (Anniversary)',
            config: {
                owner: '#той иесі|#именниник(именниница)|#namesake',
                date: '#басталу күні|#дата проведения|#date of the event',
                place: '#өткізу орны|#место проведения|#place of the event',
            }
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'wedding',
            name_kz: 'Үйлену тойы',
            name_ru: 'Свадьба',
            name_en: 'Wedding',
            config: {
                groom: '#жігіттің есімі|#имя жениха|#the groom\'s name',
                bride: '#қыздың есімі|#имя невесты|#the bride\'s name',
                owners: '#той иелері|#организаторы торжества|#the organizers of the celebration',
                date: '#басталу күні|#дата проведения|#date of the event',
                place: '#өткізу орны|#место проведения|#place of the event',
            }
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'kyz_uzatu',
            name_kz: 'Қыз ұзату',
            name_ru: 'Кыз узату',
            name_en: 'Kyz uzatu',
            config: {
                groom: '#жігіттің есімі|#имя жениха|#the groom\'s name',
                bride: '#қыздың есімі|#имя невесты|#the bride\'s name',
                owners: '#той иелері|#организаторы торжества|#the organizers of the celebration',
                date: '#басталу күні|#дата проведения|#date of the event',
                place: '#өткізу орны|#место проведения|#place of the event',
            }
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'besik_toi',
            name_kz: 'Бесік той',
            name_ru: 'Бесик той',
            name_en: 'Besik toi',
            config: {
                child: '#баланың(балалардың) есімі|#имя ребенка(детей)|#the child\'s(children\'s) name',
                owners: '#той иелері|#организаторы торжества|#the organizers of the celebration',
                date: '#басталу күні|#дата проведения|#date of the event',
                place: '#өткізу орны|#место проведения|#place of the event',
            }
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'tusaukeser',
            name_kz: 'Тұсаукесер',
            name_ru: 'Тусаукесер',
            name_en: 'Tusaukeser',
            config: {
                child: '#баланың(балалардың) есімі|#имя ребенка(детей)|#the child\'s(children\'s) name',
                owners: '#той иелері|#организаторы торжества|#the organizers of the celebration',
                date: '#басталу күні|#дата проведения|#date of the event',
                place: '#өткізу орны|#место проведения|#place of the event',
            }
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'sundet_toi',
            name_kz: 'Сүндет той',
            name_ru: 'Сундет той',
            name_en: 'Sundet toi',
            config: {
                child: '#баланың(балалардың) есімі|#имя ребенка(детей)|#the child\'s(children\'s) name',
                owners: '#той иелері|#организаторы торжества|#the organizers of the celebration',
                date: '#басталу күні|#дата проведения|#date of the event',
                place: '#өткізу орны|#место проведения|#place of the event',
            }
        }
    });
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
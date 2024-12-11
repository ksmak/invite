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
            images: [],
            invitation_txt: []
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'wedding',
            name_kz: 'Үйлену тойы',
            name_ru: 'Свадьба',
            name_en: 'Wedding',
            images: [
                `media/default.png`
            ],
            invitation_txt: [
                `
                <div className="text-xl font-bold uppercase text-center">Құрметті қонақтар!<div>
                <div>Сіз(дер)ді ұлымыз #groom мен келініміз #bride шаңырақ көтеру тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз.</div>
                <div className="mt-5 text-lg font-medium text-center text-gold">Той иелері:<div>
                <div className="text-lg font-medium text-center">#owners</div>
                <div className="mt-5 text-lg font-medium text-center text-gold">Тойдың басталу уақыты:</div>
                <div className="text-lg font-medium text-center">#date</div>
                <div className="mt-5 text-lg font-medium text-center text-gold">Тойдың мекен-жайы:</div>
                <div className="text-lg font-medium text-center">#place</div>
                `
            ]

        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'kyz_uzatu',
            name_kz: 'Қыз ұзату',
            name_ru: 'Кыз узату',
            name_en: 'Kyz uzatu',
            images: [],
            invitation_txt: []
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'besik_toi',
            name_kz: 'Бесік той',
            name_ru: 'Бесик той',
            name_en: 'Besik toi',
            images: [],
            invitation_txt: []
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'tusaukeser',
            name_kz: 'Тұсаукесер',
            name_ru: 'Тусаукесер',
            name_en: 'Tusaukeser',
            images: [],
            invitation_txt: []
        }
    });

    await prisma.invitationCategory.create({
        data: {
            category: 'sundet_toi',
            name_kz: 'Сүндет той',
            name_ru: 'Сундет той',
            name_en: 'Sundet toi',
            images: [],
            invitation_txt: []
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
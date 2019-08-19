import {IUser, UserModel} from "./models/user";
import {PhotoModel} from "./models/photo";
import {ICategory, CategoryModel} from "./models/category";
const path = require('path');
const fs = require('fs');


export const __seed = async() => {
    try {
        await new UserModel(<IUser>{
            username: 'julia',
            password: 'PO09234lwEr',
            role: 'admin'
        }).save();
    } catch (e) { }

    seedCategories();
};

const seedCategories = () => {
    const categories = ['фешн', 'портрет', 'реклама', 'пейзажи', 'свадьба'];
    for (let i=0; i<categories.length; i++) {
        new CategoryModel(<ICategory>{
            name: categories[i]
        }).save().catch(() => {});
    }
};


export const __cleanUpImages = async() => {
    const all = await PhotoModel.find({}).select('path tinyPath').lean();
    const filenames = all.reduce((arr, item) => {
        arr.push(item.path);
        arr.push(item.tinyPath);
        return arr;
    }, []);

    const dir = path.join(__filename, '..', '..', 'uploads');
    console.log(fs.readdirSync(dir));
};
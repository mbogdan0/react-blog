const ExifImage = require('exif').ExifImage;

export const exifReader = (filename) => {
    return new Promise((resolve, reject) => {
        new ExifImage({ image : filename }, function (error, exifData) {
            console.log(exifData)
            if (error) {
                reject(error);
            } else {
                const out = {
                    widthImage: exifData.image && exifData.image.ImageWidth,
                    heightImage: exifData.image && exifData.image.ImageHeight,
                    model: exifData.image && exifData.image.Model,
                    iso: exifData.exif && exifData.exif.ISO,
                    lens: exifData.exif && exifData.exif.LensModel
                };
                resolve(out);
            }
        });
    });
};

export const generateName = (length: number): string => {
    const result = [];
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const len = chars.length;
    for ( let i = 0; i < length; i++ ) {
        result.push(chars.charAt(Math.floor(Math.random() * len)));
    }
    return result.join('');
};

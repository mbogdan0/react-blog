
const DB_NAME = 'photosite';

const ConfigProduction = {
    mongoUri: `mongodb://localhost:27017/${DB_NAME}?authSource=admin`,
    port: 3002,
    jwtToken: 'iorTgjIor9049rTYgg-sdWe344wWBogsd'
};

const ConfigDevelopment = {
    mongoUri: `mongodb://localhost:27017/${DB_NAME}`,
    port: 3002,
    jwtToken: 'iorTgjIor9049rTYgg-sdWe344wWBogsd'
};

export const Config = process.env.NODE_ENV === 'production' ? ConfigProduction : ConfigDevelopment;



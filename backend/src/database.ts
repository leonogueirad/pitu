import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://pitu:\@pitu\@542589\@@localhost:3306/pitu');
export default sequelize;
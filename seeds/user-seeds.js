const { User } = require('../models');

const userData = [
    {
        username: "martin_l",
        twitter: "martinl",
        github: "martinl",
        email: "martin_l@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_h",
        twitter: "matt-h",
        github: "mattwh",
        email: "matt_h@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "tom_p",
        twitter: "tom",
        github: "tomp",
        email: "tom_p@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lisa_n",
        twitter: "lisanorris",
        github: "lisanorris",
        email: "lisa_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "poly",
        twitter: "poly_s",
        github: "poly-singh",
        email: "poly.singh@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Tina",
        twitter: "tina_f",
        github: "tina-f",
        email: "tinaf@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
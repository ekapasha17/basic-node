import Sequelize from 'sequelize'

const Sequelizer =   new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect:    'mysql'
    }
)

const models    =   {
    Users       :   Sequelizer.import('./users')
}

Object.keys(models).forEach(key =>  {
    if ('associate' in models[key]) {
        models[key].associate(models)
    }
})

export { Sequelizer }

export default models
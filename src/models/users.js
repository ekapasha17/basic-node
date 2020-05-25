const users             =   (sequelize, DataTypes)  =>  {
    const UserSchema    =   sequelize.define('users',{
        username:   {
            type        :   DataTypes.STRING,
            unique      :   true,
            allowNull   :   false,
            validate    :   {
                                notEmpty:true
                            }
        }
    })

    UserSchema.GetList  =   async function user_list() {
        let users       =   await UserSchema.findAll({
            attributes  :   ['id','username','createdAt','updatedAt']
        })
        return users
    }

    UserSchema.AddList  =   async function add_list(Username) {
        let users       =   await UserSchema.create({
            username    :   Username
        })
        return users
    }

    /*UserSchema.associate    =   models  =>  {
        UserSchema.hasMany(models.messages)
    }*/

    return UserSchema
}

export default users
import { DataTypes, Model, Sequelize } from 'sequelize'
  

  
  class EmailRegister extends Model {
  
    public id?: number
    public user?: boolean
    public email?: string
    public message?: string



    public static initialize(sequelize: Sequelize) {
      this.init({
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        user: {
          type: DataTypes.STRING,
          defaultValue: true
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: true
        },        
        message: {
          type: DataTypes.TEXT,
          defaultValue: true
        },

      }, {
        sequelize: sequelize,
        modelName: 'EmailRegister',
        tableName: 'EmailRegisters',
        timestamps: false
      })
    }
  
  }
  
  export default EmailRegister
  
  
  
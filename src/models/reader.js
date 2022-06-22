module.exports = (connection, DataTypes) => {
    const schema = {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: {
              args: true,
              msg: "Invalid Email address",
            },
          }
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
    
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [8],
              msg: "Password needs to be at least 8 characters"
            },
          }
        }
    };
    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
  };
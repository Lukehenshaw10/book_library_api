module.exports = (connection, DataTypes) => {
    const schema = {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [4],
                msg: "ISBN must be at least 4 characters"
            }
        },
    }
    };

    const BookModel = connection.define('Book', schema);
    return BookModel;
  }; 

export const createUserSchema = (SchemaCreator) => {
    const schema = SchemaCreator({
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        avatar: {
            type: String,
            default: "https://i.stack.imgur.com/l60Hf.png"
        }
    },{
        timestamps: true
    });
    return schema
}
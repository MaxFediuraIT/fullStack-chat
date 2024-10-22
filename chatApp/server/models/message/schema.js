export const createMessageSchema = (SchemaCreator) => {
    const schema = SchemaCreator({
        text: {
            type: String,
            required: [true, "text is required"],
        },
        sender: {
            type: SchemaCreator.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiver: {
            type: SchemaCreator.Types.ObjectId,
            ref: "User",
            required: true,
        },
        conversation: {
            type: SchemaCreator.Types.ObjectId,
            ref: "Conversation",
            required: true,
        },
        seen: {
            type: Boolean,
            default: false
        },
        time: {
            type: Date,
            default: Date.now,
        },
    }, {
        timestamps: true,
    });
    return schema;
}
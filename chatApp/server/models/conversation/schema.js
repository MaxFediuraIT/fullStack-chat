
export const createConversationSchema = (SchemaCreator) => {
  const schema = SchemaCreator(
    {
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
      messages: {
        type: SchemaCreator.Types.ObjectId,
        ref: "Message",
      },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};

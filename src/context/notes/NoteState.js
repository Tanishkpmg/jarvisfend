import NoteContext from "./NoteContext";
const NoteState = (props) => {
  let notes = [
    {
      _id: "64510238f762f1c5046a49a1",
      user: "6450f52b459b7b77490dd898",
      title: "New note",
      description: "Hijnkdsjksdhvl",
      tag: "personal",
      createdAt: "2023-05-02T12:29:44.243Z",
      updatedAt: "2023-05-02T12:29:44.243Z",
      __v: 0,
    },
    {
      _id: "64510238f762f1c5046a49a3",
      user: "6450f52b459b7b77490dd898",
      title: "New note",
      description: "Hijnkdsjksdhvl",
      tag: "personal",
      createdAt: "2023-05-02T12:29:44.352Z",
      updatedAt: "2023-05-02T12:29:44.352Z",
      __v: 0,
    },
    {
      _id: "64510238f762f1c5046a49a5",
      user: "6450f52b459b7b77490dd898",
      title: "New note",
      description: "Hijnkdsjksdhvl",
      tag: "personal",
      createdAt: "2023-05-02T12:29:44.507Z",
      updatedAt: "2023-05-02T12:29:44.507Z",
      __v: 0,
    },
    {
      _id: "64510238f762f1c5046a49a7",
      user: "6450f52b459b7b77490dd898",
      title: "New note",
      description: "Hijnkdsjksdhvl",
      tag: "personal",
      createdAt: "2023-05-02T12:29:44.648Z",
      updatedAt: "2023-05-02T12:29:44.648Z",
      __v: 0,
    },
    {
      _id: "64510238f762f1c5046a49a9",
      user: "6450f52b459b7b77490dd898",
      title: "New note",
      description: "Hijnkdsjksdhvl",
      tag: "personal",
      createdAt: "2023-05-02T12:29:44.907Z",
      updatedAt: "2023-05-02T12:29:44.907Z",
      __v: 0,
    },
    {
      _id: "64510239f762f1c5046a49ab",
      user: "6450f52b459b7b77490dd898",
      title: "New note",
      description: "Hijnkdsjksdhvl",
      tag: "personal",
      createdAt: "2023-05-02T12:29:45.020Z",
      updatedAt: "2023-05-02T12:29:45.020Z",
      __v: 0,
    },
    {
      _id: "64510239f762f1c5046a49ad",
      user: "6450f52b459b7b77490dd898",
      title: "New note",
      description: "Hijnkdsjksdhvl",
      tag: "personal",
      createdAt: "2023-05-02T12:29:45.219Z",
      updatedAt: "2023-05-02T12:29:45.219Z",
      __v: 0,
    },
    {
      _id: "64510239f762f1c5046a49af",
      user: "6450f52b459b7b77490dd898",
      title: "New note",
      description: "Hijnkdsjksdhvl",
      tag: "personal",
      createdAt: "2023-05-02T12:29:45.387Z",
      updatedAt: "2023-05-02T12:29:45.387Z",
      __v: 0,
    },
  ];

  return (
    <NoteContext.Provider value={notes}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;

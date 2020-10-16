import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: "Michael" },
    { id: 2, name: "Den" },
    { id: 3, name: "Devil Master" },
    { id: 4, name: "Sun Puppy" },
    { id: 5, name: "Bro" },
    { id: 6, name: "Best Hacker" },
    { id: 7, name: "New Age" },
    { id: 8, name: "Bob" },
  ];
  const messagesData = [
    { id: 1, message: "How r u?" },
    { id: 2, message: "Fine, and you?" },
    { id: 3, message: "I'm best" },
    { id: 4, message: "Be happy" },
  ];
  return (
    <div className={styles.dialogs}>
      <h2 className={styles.dialogsTitle}>Dialogs</h2>
      <div className={styles.dialogsItems}>
        {dialogsData.map((dialog) => (
          <DialogItem name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={styles.messages}>
        {messagesData.map((el) => (
          <Message message={el.message} id={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;

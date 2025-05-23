import React from "react";
import Link from "next/link";
import { items } from "../../lib/placeholder-data";
import { motion } from "motion/react";
import { createPortal } from "react-dom";

type ItemProps = { id: string };

export function Item({ id, onClose }: ItemProps & { onClose?: () => void }) {
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }
  const { category, title, description } = item;

  const content = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        onClick={onClose}
      ></motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <p>{description}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
  return createPortal(content, document.body);
}

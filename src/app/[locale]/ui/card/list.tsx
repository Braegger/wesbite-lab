"use client";

import React from "react";
import { items } from "../../lib/placeholder-data";
import { motion } from "motion/react";
import Link from "next/link";
import { BrowserRouter as Router, Route } from "react-router-dom";

type CardProps = {
  id: string;
  title: string;
  category: string;
  onClick: () => void;
};

function Card({ id, title, category, onClick }: CardProps) {
  return (
    <li className="card cursor-pointer">
      <div className="card-content-container" onClick={onClick}>
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
        </motion.div>
      </div>
    </li>
  );
}

type ListProps = {
  selectedId?: string;
  onCardClick: (id: string) => void;
};

export function List({ selectedId, onCardClick }: ListProps) {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
      ))}
    </ul>
  );
}

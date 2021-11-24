import React from 'react';
import { ExternalLink } from '@teambit/design.ui.external-link';

import styles from './card.module.scss';

export type CardProps = {
  /**
   * link for the card
   */
  link?: string;
  /**
   * heading for the card
   */
  heading?: string;
  /**
   * text for the card
   */
  text?: string;
};

export function Card({ text, link }: CardProps) {
  return (
    <div className={styles.card}>
      <ExternalLink href={link}>
        <p className={styles.text}>{text}</p>
      </ExternalLink>
    </div>
  );
}

// @flow

import React from 'react';
import { Label } from './Label'
import moment from 'moment'

import './Card.css'

type LabelType = {
  'id': number,
  'url': string,
  'name': string,
  'color': string,
  'default': boolean
};
type Props = {|
  title: string,
  labels: Array<LabelType>,
  state: string,
  number: number,
  updatedAt: string,
  createdAt: string,
  author: string,
  comments: number
|};

export const Card = (
  {
    author,
    comments,
    createdAt,
    labels,
    number,
    state,
    title,
    updatedAt
  }: Props
) => (
  <div className="gh-card">
    <section className="gh-card__header">
      <span className='gh-card__state'>{state}</span>
      #{number}
    </section>
    <section className="gh-card__body">
      <em>{moment(updatedAt).fromNow()}</em>
      <h2 className="gh-card__body-header">{title}</h2>
      {labels.map((data, k) =>
        <Label {...data} key={k} />
      )}
    </section>
    <section className="gh-card__metadata">
      Opened {moment(createdAt).fromNow()} by: <b>{author}</b>
    </section>
    {comments > 0 &&
      <section className="gh-card__comments">
        <img
          className='gh-card__comments-icon'
          src="http://www.megaicons.net/static/img/icons_title/8/178/title/management-comments-icon.png"
          alt="comment-icon"
        />
        {comments} Comments
      </section>
    }
  </div>
);

Card.displayName = 'Card';

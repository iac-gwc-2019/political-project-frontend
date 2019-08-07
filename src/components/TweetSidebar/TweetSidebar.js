import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import styles from './TweetStyle.css';

export default function TweetSidebar() {

  return (
    <div className={styles.twitter_block}>
      <TwitterHashtagButton
      tag={'healthcare'}
      />
      <div className={styles.twitter_timeline}>
      <TwitterTimelineEmbed
       sourceType="profile"
       screenName="aoc"
       options={{height: 450, width: 300}}
      />
      </div>
    </div>
  )
}

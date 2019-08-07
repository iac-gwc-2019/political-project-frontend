import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import styles from './TweetStyle.css';

export default function TweetSidebar({twitter_account}) {


  return (
    <div className={styles.twitter_block}>
      <TwitterHashtagButton
      tag={twitter_account}
      />
      <div className={styles.twitter_timeline}>
      <TwitterTimelineEmbed
       sourceType="profile"
       screenName={twitter_account}
       options={{height: 450, width: 300}}
      />
      </div>
    </div>
  )
}

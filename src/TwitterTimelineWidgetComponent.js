import * as React from 'react';
import * as Scrivito from 'scrivito';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

Scrivito.provideComponent('TwitterTimelineWidget', ({ widget }) => {
  const twitter = widget.get('twitter');

  if (!twitter.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide a twitter name in the widget properties.
        </h4>
    );
  }

  return (
    <TwitterTimelineEmbed
    sourceType="profile"
    screenName={twitter}
    options={{height: 400}}
    />
  );
});


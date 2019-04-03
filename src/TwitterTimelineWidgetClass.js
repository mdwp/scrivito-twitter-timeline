import * as Scrivito from 'scrivito';

const TwitterTimelineWidget = Scrivito.provideWidgetClass('TwitterTimelineWidget', {
    attributes: {
        twitter: 'string',
    },
});

export default TwitterTimelineWidget;
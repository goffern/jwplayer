import VideoAction from 'providers/video-actions-mixin';
import VideoAttached from 'providers/video-attached-mixin';
import Tracks from 'providers/tracks-mixin';
import BackboneEvents from 'utils/backbone.events';
import ProviderDefaults from 'providers/default';


class MockDefault {}
MockDefault.prototype = Object.assign({}, ProviderDefaults, BackboneEvents, VideoAction, VideoAttached, Tracks);

export default class MockProvider extends MockDefault {
    constructor(playerId, playerConfig, mediaElement) {
        super();
        this.video = mediaElement;
    }

    getName() {
        return { name: 'mock' };
    }

    getContainer() {
        return this.container;
    }

    setContainer(element) {
        this.container = element;
        if (this.video && this.video.parentNode !== element) {
            element.appendChild(this.video);
        }
    }
}

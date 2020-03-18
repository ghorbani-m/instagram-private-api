import * as request from 'request-promise-native';
import { Entity } from '../core/entity';
import { MediaEntityOembedResponse } from '../responses';

export class MediaEntity extends Entity {
  static async oembed(url: string): Promise<MediaEntityOembedResponse> {
    return request({
      url: 'https://api.instagram.com/oembed/',
      json: true,
      qs: {
        url,
      },
    });
  }
}

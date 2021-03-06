import { Query, QueryInterface, QueryJSON, QueryURL } from './base';

export type RequestsQueryInterface = QueryInterface;

export type RequestsQueryJSON = QueryJSON;

export type RequestsQueryURL = QueryURL;

export class RequestsQuery extends Query implements RequestsQueryInterface {
  public get endpoint(): string {
    return this.getURL('/api/requests');
  }

  public static fromURLParams(params: RequestsQueryURL): RequestsQuery {
    return new RequestsQuery(super.fromURLParams(params));
  }

  public static fromJSON(json: RequestsQueryJSON): RequestsQuery {
    return new RequestsQuery(super.fromJSON(json));
  }
}
